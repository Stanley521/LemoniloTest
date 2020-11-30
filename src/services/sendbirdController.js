import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SendBird from 'sendbird';
import {initMenu, sendbirdSignin} from '../sendBird/actions';
import {ON_MESSAGE_RECEIVED} from '../sendBird/actions/types';
import {sbConnect} from '../sendBird/sendbirdActions';
import {uuidv4} from './REST';
import AsyncStorage from '@react-native-community/async-storage';

export function SendBirdController(props) {
  const sendBirdUser = useSelector(state => state.sendBirdUser);
  const dispatch = useDispatch();
  const onMessageReceivedID = uuidv4();

  async function initOnMessageReceived() {
    const sb = SendBird.getInstance();
    sb.getTotalUnreadMessageCount(function(count, error) {
      if (error) {
        return;
      }
      dispatch({
        type: ON_MESSAGE_RECEIVED,
        messageReceived: {
          unreadMessageCount: count,
        },
      });
      
    });
    var ChannelHandler = new sb.ChannelHandler();
    ChannelHandler.onMessageReceived = function(channel, message) {
      dispatch({
        type: ON_MESSAGE_RECEIVED,
        messageReceived: channel,
      });
    };
    sb.addChannelHandler(onMessageReceivedID, ChannelHandler);
  }

  async function init() {
    let id = await AsyncStorage.getItem('id');
    let fullName = await AsyncStorage.getItem('fullname');
    sendbirdSignin({userId: id, nickname: fullName})(dispatch);
    __DEV__ && console.log('--------------Connecting SendBird-------------');
    try {
      await sbConnect();
    } catch (error) {
      __DEV__ && console.log(error);
    }
    __DEV__ && console.log('--------------SendBird Connected-------------');
    dispatch(initMenu());
    await initOnMessageReceived();
  }

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const sb = SendBird.getInstance();
    
    if ((sb == null || sb.currentUser == null) && !loading) {
      setUser(sendBirdUser.user);
      setLoading(true);
      init().then(() => {
        setLoading(false);
      });
    }
  }, []);
  return null;
}
