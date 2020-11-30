import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import icon from "../assets/assets";
import NavigationService from '../navigation/NavigationService';
import { SHOW_IMAGE_PREVIEW } from '../redux/actions/types';
import { isEmpty } from '../services/consts';
import NoImageGenerator from './NoImageGenerator'

export default function DoctorImage(props) {
    const {
        url,
        title,
        clickPreview = false,
        diameter = 50,
    } = props;
    const dispatch = useDispatch();
    const isWebPImage = props.url?.includes('default')

    useEffect(() => {

    }, [])

    function renderImageUrl(){
      if(url){

        if(!isWebPImage){
          return (<Image
              style={{width: diameter, height: diameter, borderRadius: diameter/ 2}}
              source={{ uri: props.url}}
          />)
        }
      }
      
      return (
        <NoImageGenerator
        style={{}}
        title = {title}
        diameter = {diameter}/>
      )
    }

    return (
        clickPreview ?
            (<TouchableOpacity onPress={ () => {
                dispatch({
                    type: SHOW_IMAGE_PREVIEW,
                    images: [{
                        uri: props.url
                    }]
                })
                NavigationService.navigate('ImageView');
            }}>
                {renderImageUrl()}
            </TouchableOpacity>)
        :
            (renderImageUrl())
    )
}
