import React from 'react';
import { StyleSheet, Text, View, Dimensions, Platform, PermissionsAndroid, TextInput, Button, Clipboard, KeyboardAvoidingView } from 'react-native'
import RNCallKeep from 'react-native-callkeep';
import uuid from 'uuid';
import VoipPushNotification from 'react-native-voip-push-notification';

class DialerController extends React.Component {
  constructor(props) {
    super(props);

    this.currentCallId = null;

    this.state = {
      'uuid' : ''
    }

    // Add RNCallKeep Events
    RNCallKeep.addEventListener('didReceiveStartCallAction', this.didReceiveStartCallAction);
    RNCallKeep.addEventListener('answerCall', this.onAnswerCallAction);
    RNCallKeep.addEventListener('endCall', this.onEndCallAction);
    RNCallKeep.addEventListener('didDisplayIncomingCall', this.onIncomingCallDisplayed);
    RNCallKeep.addEventListener('didPerformSetMutedCallAction', this.onToggleMute);
    RNCallKeep.addEventListener('didToggleHoldCallAction', this.onToggleHold);
    RNCallKeep.addEventListener('didPerformDTMFAction', this.onDTMFAction);
    RNCallKeep.addEventListener('didActivateAudioSession', this.audioSessionActivated);
  }

  // Initialise RNCallKeep
  setup = () => {
    const options = {
      ios: {
        appName: 'mHealthBank',
        supportsVideo: true,
        maximumCallGroups: '1',
        maximumCallsPerCallGroup: '1'
      },
      android: {
        alertTitle: 'Permissions Required',
        alertDescription:
          'This application needs to access your phone calling accounts to make calls',
        cancelButton: 'Cancel',
        okButton: 'ok',
        imageName: 'sim_icon',
        additionalPermissions: [PermissionsAndroid.PERMISSIONS.READ_CONTACTS]
      }
    };

    try {
      RNCallKeep.setup(options);
      RNCallKeep.setAvailable(true); // Only used for Android, see doc above.
      
    } catch (err) {
      console.error('initializeCallKeep error:', err.message);
    }
  }

  // Use startCall to ask the system to start a call - Initiate an outgoing call from this point
  startCall = ({ handle, localizedCallerName }) => {
    // Your normal start call action
    
    RNCallKeep.startCall(this.getCurrentCallId(), handle, localizedCallerName, 'email', true);
  };

  reportEndCallWithUUID = (callUUID, reason) => {
    RNCallKeep.reportEndCallWithUUID(callUUID, reason);
  }

  // Event Listener Callbacks

  didReceiveStartCallAction = (data) => {
    let { handle, callUUID, name } = data;
    // Get this event after the system decides you can start a call
    // You can now start a call from within your app
    
    RNCallKeep.displayIncomingCall(callUUID, 'deta.teguh@mhealthbank.com', "deta", 'email', true);
    
  };

  onAnswerCallAction = (data) => {
    let { callUUID } = data;
    // Called when the user answers an incoming call
  };

  onEndCallAction = (data) => {
    let { callUUID } = data;
    RNCallKeep.endCall(this.getCurrentCallId());

    this.currentCallId = null;
  };

  // Currently iOS only
  onIncomingCallDisplayed = (data) => {
    let { error } = data;
    // You will get this event after RNCallKeep finishes showing incoming call UI
    // You can check if there was an error while displaying
    __DEV__ && console.log("onIncomingCallDisplayed "+JSON.stringify(data));
    __DEV__ && console.log(error);
  };

  onToggleMute = (data) => {
    let { muted, callUUID } = data;
    // Called when the system or user mutes a call
  };

  onToggleHold = (data) => {
    let { hold, callUUID } = data;
    // Called when the system or user holds a call
  };

  onDTMFAction = (data) => {
    let { digits, callUUID } = data;
    // Called when the system or user performs a DTMF action
  };

  audioSessionActivated = (data) => {
    // you might want to do following things when receiving this event:
    // - Start playing ringback if it is an outgoing call
  };

  getCurrentCallId = () => {
    if (!this.currentCallId) {
      this.currentCallId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      this.setState({
        uuid: this.currentCallId
      })
    }

    return this.currentCallId;
  };

  async componentDidMount(){
    await this.setup()
    // await this.startCall("deta.teguh@mhealthbank.com","Deta Teguh")
    // __DEV__ && console.log(RNCallKeep.isCallActive(this.getCurrentCallId()));
    // await RNCallKeep.startCall(this.getCurrentCallId(), 'deta.teguh@mhealthbank.com', "deta", 'email', true);
  }

  render() {
    return(
      <KeyboardAvoidingView
        style={{
          flex: 1
        }}
      >
        <TextInput 
          placeholder="Masukan id caller"
          onChangeText={text =>this.setState({uuid: text})}
        />
        <TextInput 
          value={this.state.uuid}
          onChangeText={text => this.setState({uuisd: text})}
          editable
        />
        <Button onPress={()=>Clipboard.setString(this.getCurrentCallId())} title="Copy UUID" />
        <Button onPress={()=>RNCallKeep.startCall(this.state.uuid, 'deta.teguh@mhealthbank.com', "deta", 'email', true)} title={"Make a call"}/>
      </KeyboardAvoidingView>
    )
  }
}

export default DialerController