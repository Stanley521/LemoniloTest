import React, { useState } from "react";
import { Alert } from "react-native";
import axios from 'axios'
import { API_URL } from 'react-native-dotenv'
import I18n from "../local/I18n";
import { signout_confirmed } from './Auth';
import { store } from '../redux/store';

const rest = axios.create({
  baseURL: 'https://mhealthbank-backend-api-new-prescriptions.azurewebsites.net',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

function doLogin(){
  signout_confirmed(store.dispatch);
  Alert.alert(
      ""+I18n.t("signin.alert_token_expired_title"),
      ""+I18n.t("signin.alert_token_expired_desc"),
      [
        {
          text: ""+I18n.t("common.txt_ok"),
          onPress: () => {
            __DEV__ && console.log("OK Pressed")
          }
        }
      ],
      { cancelable: false }
    );
}

export function setHeader2(key, value) {
  rest.defaults.headers.common[key] = value;
}

export async function uploadFile(url, file) {
  try {
    let formData = new FormData();
    formData.append('Files', file);
    const response = await rest.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data'}
    })

    return response.data;
  }
  catch (error) {
    __DEV__ && console.log(error.response)
    __DEV__ && console.log(error)

    if (error?.response?.status == 401) {
      const tmp = await doLogin();
      return { error: true, message: error?.response?.data?.message ? error.response.data.message : error };
    }

    return { error: true, message: error?.response?.data?.message ? error.response.data.message : error }
  }
}

export async function postData(url, data) {
  try {
    const response = await rest.post(url, data)
    return response.data;
  }
  catch (error) {
    __DEV__ && console.log(error.response)
    __DEV__ && console.log(error)

    if (error?.response?.status == 401) {
      const tmp = await doLogin();
      return { error: true, message: error?.response?.data?.message ? error.response.data.message : error };
    }

    return { error: true, message: error?.response?.data?.message ? error.response.data.message : error }
  }
}

export async function deleteData(url, data) {
  try {
    const response = await rest.delete(url, { data })
    return response.data;
  }
  catch (error) {
    __DEV__ && console.log(error.response)
    __DEV__ && console.log(error)

    if (error?.response?.status == 401) {
      const tmp = await doLogin();
      return { error: true, message: error?.response?.data?.message ? error.response.data.message : error };
    }

    return { error: true, message: error?.response?.data?.message ? error.response.data.message : error }
  }
}

export async function getData(url) {
  try {
    const response = await rest.get(url)
    return response.data;
  }
  catch (error) {
    __DEV__ && console.log('eror1:',error?.response?.status)
    __DEV__ && console.log('eror2:',error)

    if (error?.response?.status == 401) {
      const tmp = await doLogin();
      return { error: true, code:401, message: error?.response?.data?.message ? error.response.data.message : error };
    }
    return { error: true, message: error?.response?.data?.message ? error.response.data.message : error }
  }
}

export async function patchData(url, data) {
  try {
    const response = await rest.patch(url, data)
    return response.data;
  }
  catch (error) {
    __DEV__ && console.log(error.response)
    __DEV__ && console.log(error)

    if (error?.response?.status == 401) {
      const tmp = await doLogin();
      return { error: true, message: error?.response?.data?.message ? error.response.data.message : error };
    }

    return { error: true, message: error?.response?.data?.message ? error.response.data.message : error }
  }
}

export async function putData(url, data) {
  try {
    const response = await rest.put(url, data)
    return response.data;
  }
  catch (error) {
    __DEV__ && console.log(error.response)
    __DEV__ && console.log(error)

    if (error?.response?.status == 401) {
      const tmp = await doLogin();
      return { error: true, message: error?.response?.data?.message ? error.response.data.message : error };
    }

    return { error: true, message: error?.response?.data?.message ? error.response.data.message : error }
  }
}

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
