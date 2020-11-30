import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class DiagnoseTips extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>DiagnoseTips!</Text>
      </View>
    );
  }
}

class MedicationTips extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MedicationTips!</Text>
      </View>
    );
  }
}
class LaboratoriesTips extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>LaboratoriesTips!</Text>
      </View>
    );
  }
}

const TipsTab = createBottomTabNavigator({
  DiagnoseTips,
  MedicationTips,
  MedicationTips,
});

export default createAppContainer(TipsTab);