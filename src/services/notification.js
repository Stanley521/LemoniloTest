
import { useEffect, useState } from 'react';
import {  Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux';
import { notificationReceived } from '../redux/actions/notificationAction';
// import { Firebase, Notification } from 'react-native-firebase';
// import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions';
import OneSignal from 'react-native-onesignal'
import {ONE_SIGNAL_APPID} from 'react-native-dotenv';
import NavigationService from '../navigation/NavigationService';
import { onGroupChannelPress } from '../sendBird/actions';
import { getChannelByDoctorId } from '../services/chatServices'

export async function registerForPushNotificationsAsync(id) {
  const appID = ONE_SIGNAL_APPID;
  OneSignal.init(appID)
  OneSignal.inFocusDisplaying(2)
  if ( id ) {
    OneSignal.setExternalUserId(id)
  }
  OneSignal.addEventListener('received', onReceived);
  OneSignal.addEventListener('opened', onOpened);
  OneSignal.addEventListener('ids', onIds);
  OneSignal.setLogLevel(6, 0);
}

export function NotificationController(props) {
  const [ notification, setNotification] = useState(null);
  let _notificationSubscription;
  const { currentScreen } = props
  const dispatch = useDispatch();

  useEffect(() => {
    registerForPushNotificationsAsync();

    // AsyncStorage.getItem('id').then( (data ) => {
      
    //   if (data) {
      
    //     registerForPushNotificationsAsync(data);
    //   }
    // })
    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    }
  }, [])

  onReceived = (notif) => {
    if (Platform.OS === 'ios') {
      const data = notif.payload
      __DEV__ && console.log('NOTIF DATA', JSON.stringify(data, null, 2))
      if (data?.additionalData?.type == 'VIDEO_CALL_INCOMING') {
        NavigationService.navigate('VideoCall', { sessionId: data.additionalData.sessionId })
      }
      if (data?.additionalData?.type == 'VIDEO_CALL_DISMISS') {
        NavigationService.navigate('VideoCall', { sessionId: data.additionalData.sessionId, action: "DISMISS" })
      }
      
      _handleNotification(notif)
    } else {
      const data = notif.payload
      __DEV__ && console.log('NOTIF DATA', JSON.stringify(data, null, 2))
      if(data?.additionalData?.paymentFor == 'chat') {
        const { doctorId } = data.additionalData
        const { paymentStatus } = data.additionalData
        if(paymentStatus === 'success') {
          __DEV__ && console.log('REDIRECT!!!')
          toChatRoom(doctorId)
        } else if(['fail', 'failed'].includes(paymentStatus)) {
          alert('Payment failed')
        }
      } else if(data?.additionalData?.paymentFor == 'video') {
        const { paymentStatus } = data.additionalData
        if(paymentStatus === 'success') {
          NavigationService.navigate('Home')
        } else if(['fail', 'failed'].includes(paymentStatus)) {
          alert('Payment failed')
        }
      } else if(data?.additionalData?.paymentFor?.toLowerCase() == 'prescription') {
        const { paymentStatus } = data.additionalData
        if(paymentStatus === 'success') {
          NavigationService.navigate('Home')
        } else if(['fail', 'failed'].includes(paymentStatus)) {
          alert('Payment failed')
        }
      }

    /*  if(data?.additionalData?.topic === 'END_CHAT' && currentScreen === 'CHAT') {
        alert(data?.additionalData?.contentEn)
        NavigationService.navigate('Home')
      }*/

      if(data?.additionalData?.topic === 'END_CHAT') {
        alert(data?.additionalData?.contentEn)
        NavigationService.navigate('Home')
      }
    }
  }

  const toChatRoom = async (doctorId) => {
    const channel = await getChannelByDoctorId(doctorId)
  
    if(channel) {
      const metaData = JSON.parse(channel.data)
      if(typeof metaData === 'object') {
        const doctor = channel.members.find(member => member.userId === doctorId)
        onGroupChannelPress(channel.channelUrl, doctor)(dispatch);
      }
    /*  if(typeof metaData === 'object' && metaData.isPaid === true) {
        const doctor = channel.members.find(member => member.userId === doctorId)
        onGroupChannelPress(channel.channelUrl, doctor)(dispatch);
      } else {
        NavigationService.navigate('ChatBillingSummary', { doctorId })
      }*/
    }
    /*else {
      NavigationService.navigate('ChatBillingSummary', { doctorId })
    }*/
  }

  onOpened = (result) => {
    
  }

  onIds = (device) => {
    
  }

  // useEffect( () => {
  //   registerForPushNotificationsAsync();
  //   // Handle notifications that are received or selected while the app
  //   // is open. If the app was closed and then opened by tapping the
  //   // notification (rather than just tapping the app icon to open it),
  //   // this function will fire on the next tick after the app starts
  //   // with the notification data.

  //   _notificationSubscription = Notifications.addListener(_handleNotification);
  //   return (
  //     () => {
  //       _notificationSubscription.remove();
  //     }
  //   )
  // }, [])

  function _handleNotification (notification) {
    // // do whatever you want to do with the notification
    // this.setState({ notification: notification });
    notificationReceived( notification , dispatch)
  };
  return null;
}
