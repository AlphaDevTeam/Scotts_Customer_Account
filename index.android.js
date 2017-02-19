/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import List from './src/components/List';
import Header from './src/components/header';
import Header0 from './src/components/header0';
import SearchPanel from './src/components/SearchPanel';

import KeepAwake from 'react-native-keep-awake';


export default class customer_account extends Component {
  render() {
    return (
      <SearchPanel/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  detailsContentStyle: {
    flex: 2,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 5,
    backgroundColor:'white',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('customer_account', () => customer_account);
