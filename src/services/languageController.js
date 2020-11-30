
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SendBird from 'sendbird';
import {initMenu, sendbirdSignin} from '../sendBird/actions';
import {ON_MESSAGE_RECEIVED} from '../sendBird/actions/types';
import {sbConnect} from '../sendBird/sendbirdActions';
import {uuidv4} from './REST';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from './../../src/local/I18n';

export function LanguageController(props) {
    const lang = useSelector(state => state.language);
    useEffect(() => {
        if (lang.code) {
            I18n.locale = lang.code;
        } else {
            var defaultLang = 'id';
            I18n.locale = defaultLang;
        }
    }, []);
    
    return null
}