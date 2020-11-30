import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getClinicTypes,
  getCountries,
  getFloorLevels,
  getGenders,
  getLanguages,
  getSalutations,
  getSecurityQuestions,
  getVisitTypes,
  getCallCodeList,
  getRaces,
  getPublicHoliday,
} from './getStaticData';
import {
  GET_CALLCODE_SUCCESS,
  GET_COUNTRY_SUCCESS,
  GET_LANGUAGE_SUCCESS,
  GET_RACE_SUCCESS,
  GET_HOLIDAY_SUCCESS,
} from '../redux/actions/types';
import { setHeader } from './REST';
import AsyncStorage from '@react-native-community/async-storage';

export default props => {
  const lang = useSelector(state => state.language)

  const dispatch = useDispatch();

  const setSalutations = data =>
    dispatch({
      type: 'SET_SALUTATIONS',
      payload: data,
    });

  const setGenders = data =>
    dispatch({
      type: 'SET_GENDERS',
      payload: data,
    });

  const setFloorLevels = data =>
    dispatch({
      type: 'SET_FLOOR_LEVELS',
      payload: data,
    });

  const setSecurityQuestions = data =>
    dispatch({
      type: 'SET_SECURITY_QUESTIONS',
      payload: data,
    });

  const setClinicTypes = data =>
    dispatch({
      type: 'SET_CLINIC_TYPES',
      payload: data,
    });

  const setVisitTypes = data =>
    dispatch({
      type: 'SET_VISIT_TYPES',
      payload: data,
    });

  const setRaces = data =>
    dispatch({
      type: GET_RACE_SUCCESS,
      data: data,
    });

  const setLanguages = data =>
    dispatch({
      type: GET_LANGUAGE_SUCCESS,
      data: data,
    });

  const setCountries = data =>
    dispatch({
      type: GET_COUNTRY_SUCCESS,
      data: data,
    });

  const setCallCodeList = data =>
    dispatch({
      type: GET_CALLCODE_SUCCESS,
      data: data,
    });

  const setPublicHoliday = data =>
    dispatch({
      type: GET_HOLIDAY_SUCCESS,
      data: data,
    });

  let country = useSelector(state => state.profile.userInfo.country);

  const prepareApiHandler = async () => {
    let token = await AsyncStorage.getItem('token');
    setHeader('Authorization', `Bearer ${token}`)
    setHeader('lang', lang.code)
    setReady(true)
  }

  const [ready, setReady] = useState(false)

  useEffect(() => {
    prepareApiHandler();
    getSalutations(data => setSalutations(data.payload));
    getGenders(data => setGenders(data.payload));
    getFloorLevels(data => setFloorLevels(data.payload));
    getSecurityQuestions(data => setSecurityQuestions(data.payload));
    getClinicTypes(data => setClinicTypes(data.payload));
    getVisitTypes(data => setVisitTypes(data.payload));

    getLanguages(data => {
      
      setLanguages(data.payload);
    });
    getCountries({row: 200, page: 0}, data => setCountries(data.payload));
    getCallCodeList(data => setCallCodeList(data.payload));
    getRaces(data => setRaces(data.payload));
    if (country) {
      getPublicHoliday({country: country}, data => {
        setPublicHoliday(data.payload);
      });
    }
  }, []);

  return ready && props.children;
};
