// NavigationService.js
import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}


// let _navigator;

// function setTopLevelNavigator(navigatorRef) {
//   _navigator = navigatorRef;
// }

// function navigate(routeName, params) {
//   _navigator.dispatch(
//     CommonActions.navigate({
//       routeName,
//       params,
//     })
//   );
// }

export function goBack(key) {
  navigationRef.current?.dispatch(
    CommonActions.back({
      key,
    })
  );
}
// add other navigation functions that you need and export them