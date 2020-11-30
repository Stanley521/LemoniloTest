import React from 'react';
import EnhancedImageViewing from 'react-native-image-viewing';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '../../navigation/NavigationService';
import { HIDE_IMAGE_PREVIEW } from '../../redux/actions/types';

export default function ImageView() {
    const dispatch = useDispatch();
    const viewImage = useSelector( state => state.viewImage );

    function requestClose() {
      dispatch({
        type: HIDE_IMAGE_PREVIEW
      })
      NavigationService.goBack();
    }
    return (
      <EnhancedImageViewing
        images={
          viewImage.images
        }
        imageIndex={0}
        visible={viewImage.show}
        onRequestClose={() => requestClose()}
      />
    )
  }