import {
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Biometrics from 'react-native-biometrics';
import DeviceInfo from 'react-native-device-info';
import { postData, setHeader } from './REST'
import I18n from "../local/I18n";

export const loginBiometrics = async (deviceId, signedDeviceId) => {
  let input = { deviceId, signedDeviceId }
  __DEV__ && console.log(`/api/Doctor/Auth/Biometrics/login`);
  __DEV__ && console.log(input)

  let response = await postData(`/api/Doctor/Auth/Biometrics/login`, input)
  if (!response.error) {
    const { token } = response.payload
    await AsyncStorage.setItem('token', token)
    setHeader('Authorization', `Bearer ${token}`)
  }
  return response
}

export const enrollBiometrics = async (deviceId, publicKey) => {
  let input = { deviceId, publicKey }
  let response = await postData(`/api/Doctor/Auth/Biometrics/enroll`, input)
  return response
}

export const revokeBiometrics = async (deviceId) => {
  let input = { deviceId }
  let response = await postData(`/api/Doctor/Auth/Biometrics/revoke`, input)
  return response
}

export const handleBiometrics = async (onSuccess, enableWhenSuccess = () => { }) => {
  __DEV__ && console.log('Biometric');
  let biometricsEnabled = !!(await AsyncStorage.getItem('biometrics'))
  if (!biometricsEnabled) {
    Alert.alert(
      I18n.t("signin.alert_signin_biometric_not_enable_title"),
      I18n.t("signin.alert_signin_biometric_not_enable_desc"),
      [
        {
          text: I18n.t('edit_profile.txt_enable_biometrics'),
          onPress: async () => {
            enableWhenSuccess(true);
            Alert.alert(I18n.t('edit_profile.txt_biometrics'), I18n.t('edit_profile.txt_enable_biometrics_after_auth'))
          },
          style: "neutral"
        },
        { text: "OK" }
      ]
    )
    return
  }

  let deviceId = DeviceInfo.getUniqueId()
  let options = {
    promptMessage: 'Waiting fingerprint or facial recognition to sign in.',
    payload: deviceId,
    cancelButtonText: 'Cancel'
  }
  try {
    // let { success, signature, error } = await Biometrics.createSignature(options);
    __DEV__ && console.log('Biometric');
    let response = await Biometrics.createSignature(options);
    let { success, signature, error } = response;
    __DEV__ && console.log('response')
    __DEV__ && console.log(response)
    __DEV__ && console.log('success')
    __DEV__ && console.log(success);
    __DEV__ && console.log('signature')
    __DEV__ && console.log(signature);
    __DEV__ && console.log('error')
    __DEV__ && console.log(error);
    if (success) {
      onSuccess(deviceId, signature);
    } else {
      __DEV__ && console.log(error);
      if (error.includes('attempt'))
        Alert.alert(I18n.t("signin.alert_signin_biometric_failed_title"), I18n.t("signin.alert_signin_biometric_failed_desc"))
      else if (!error.includes('cancel'))
        Alert.alert('Biometrics Failed', error)
    }
  } catch (error) {
    __DEV__ && console.log('error');
    __DEV__ && console.log(error);
    if (error.message.includes('failed attempt'))
      Alert.alert(I18n.t("signin.alert_signin_biometric_failed_title"), I18n.t("signin.alert_signin_biometric_failed_desc"))
    else
      Alert.alert(I18n.t("signin.alert_signin_biometric_failed_title"), error.message)
  }
}


export async function saveBiometrics(results, profile = {}) {
  let current = await AsyncStorage.getItem('biometrics') == profile.patientId
  let noChange = current == biometrics
  if (noChange)
    return

  let deviceId = DeviceInfo.getUniqueId()
  if (biometrics) {
    enableBiometric(results, profile)
  }
  else {
    let response = await revokeBiometrics(deviceId)
    let message = response.error ? `Failed to disable biometrics:\n- ${response.message}` : I18n.t("edit_profile.txt_success_disable_biometrics")
    results.push(message)
    if (!response.error) {
      await AsyncStorage.removeItem('biometrics')
      await Biometrics.deleteKeys()
    }
  }
}

export async function enableBiometric(results, profile = {}) {
  let biometrics = true;
  let current = await AsyncStorage.getItem('biometrics') == profile.patientId
  let noChange = current == biometrics
  if (noChange)
    return

  let deviceId = DeviceInfo.getUniqueId()
  const { available, error } = await Biometrics.isSensorAvailable()
  if (!available) {
    results.push('Cannot enable biometrics:\n- ' + error)
    return
  }

  const { publicKey } = await Biometrics.createKeys('MHB_PATIENT')
  let response = await enrollBiometrics(deviceId, publicKey)
  let message = response.error ? `Failed to enable biometrics:\n- ${response.message}` : I18n.t("edit_profile.txt_success_enable_biometrics")
  results.push(message)
  if (!response.error) {
    await AsyncStorage.setItem('biometrics', profile.patientId)
  }
}