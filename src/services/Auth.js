import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../navigation/NavigationService';
import { sbDisconnect } from '../sendBird/sendbirdActions';
import { getData } from './REST';
import OneSignal from 'react-native-onesignal';
import { INIT_PROFILE } from '../redux/actions/types';
import { useDispatch } from 'react-redux';
import I18n from '../local/I18n';
import { asyncEmail, asyncRememberMe } from '../screens/Authentication/services';

export async function signout_confirmed(dispatch) {
  OneSignal.removeExternalUserId();
  let email = await asyncEmail();
  let remembered = await asyncRememberMe();
  let biometric = await AsyncStorage.getItem('biometrics');
  await AsyncStorage.clear();
  if (remembered) await asyncEmail(email);
  await asyncRememberMe(remembered)
  await AsyncStorage.setItem('biometrics', biometric || '');
  await sbDisconnect();
  dispatch({
    type: INIT_PROFILE,
  });
  NavigationService.navigate('AuthLoading');
}

export const signout = async dispatch => {
  Alert.alert(
    I18n.t('profile.alert_signout_title'),
    I18n.t('profile.alert_signout_desc'),
    [
      {
        text: I18n.t('common.txt_cancel'),
      },
      {
        text: I18n.t('common.txt_signout2'),
        onPress: () => {
          signout_confirmed(dispatch);
        },
      },
    ],
  );
};

async function setAsyncStorage(payload) {
  await AsyncStorage.setItem('email', payload.emailAddress || '');
  await AsyncStorage.setItem('fname', payload.firstName || '');
  await AsyncStorage.setItem('lname', payload.lastName || '');
  await AsyncStorage.setItem('fullName', payload.fullName || '');
  await AsyncStorage.setItem('gender', payload.gender || '');
  await AsyncStorage.setItem('salutation', payload.salutationDesc || '');
  await AsyncStorage.setItem('age', payload.age.toString() || '');
}

export async function getProfile() {
  let id = await AsyncStorage.getItem('id');
  const response = await getData(
    `/api/PatientProfile/${id}`,
  );

  const createdDate = await AsyncStorage.getItem('createdDate');
  if (response.error) {
    Alert.alert(null, 'User not found, please signin again');
    return NavigationService.navigate('Auth');
  }
  setAsyncStorage(response.payload);
  return {
    ...response.payload,
    createdDate: createdDate,
  };
}

export const getFname = async setProfile => {
  let id = await AsyncStorage.getItem('id');
  let fname = await AsyncStorage.getItem('fname');
  let lname = await AsyncStorage.getItem('lname');
  let gender = await AsyncStorage.getItem('gender');
  let age = await AsyncStorage.getItem('age');
  let address = await AsyncStorage.getItem('address');
  return fname;
};
