/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import configureStore from './src/store';
import { Provider } from 'react-redux';
const store = configureStore()

const appRedux = () => (
    <Provider store={store}><App /></Provider>
)
AppRegistry.registerComponent('main', () => appRedux);