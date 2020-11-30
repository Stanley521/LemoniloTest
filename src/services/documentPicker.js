// import * as DocumentPicker from 'expo-document-picker';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';
import FilePickerManager from 'react-native-file-picker';
import ImagePicker from 'react-native-image-picker';

export const documentPicker = async () => {
    let data = {}
    
    FilePickerManager.showFilePicker(null, (response) => {
      
       
        if (response.didCancel) {
          __DEV__ && console.log('User cancelled file picker');
        }
        else if (response.error) {
          __DEV__ && console.log('FilePickerManager Error: ', response.error);
        }
        else {
            data = response
        }
      });
    // let response = await DocumentPicker.getDocumentAsync({
    //     mediaTypes: '*/*',
    //     copyToCacheDirectory: true,
    // });
    
    // if ( response.type === 'success') {
    //     return response;
    // }
    return data;
};

export async function pickImage() {
    let data = {}
    const imageOptions = {
        noData: true,
        maxWidth: 400,
        maxHeight: 400,
        quality: 0.93
      }

    ImagePicker.showImagePicker(imageOptions, (response) => {
      
      
        if (response.didCancel) {
          __DEV__ && console.log('User cancelled image picker');
        } else if (response.error) {
          __DEV__ && console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          __DEV__ && console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
          let data = response
        }
    })
        return data

    // let response = await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //     allowsEditing: true,
    //     base64: true,
    // });
    // return response;
}

async function getCameraRollAsync() {
    // permissions returns only for CameraRoll permissions on iOS and under certain conditions, see Permissions.CameraRoll
    // const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    
    // if (status === 'granted') {
    //     Alert.alert(
    //         null,
    //         'Camera roll permission granted'
    //     )
    // } else {
    //   throw new Error('CameraRoll permission not granted');
    // }
}

export async function checkCameraRollPermission() {
    // const { status, expires, permissions } = await Permissions.getAsync(
    //     Permissions.CAMERA_ROLL
    //   );
    //   if (status !== 'granted') {
    //         __DEV__ && console.log('Permissions.CAMERA_ROLL not granted');
    //         Alert.alert(
    //             'Camera roll permission is not granted',
    //             'Allow mHealthBank to access your camera roll?',
    //             [
    //                     {
    //                         text: 'Cancel',
    //                     },
    //                     {
    //                         text: 'Allow', onPress: () => getCameraRollAsync()
    //                     }
    //             ]
    //         );
    //   } else {
    //       return true;
    //   }
    //   return false;
}