import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';

let customFonts = {
  Drip: require('../assets/DripinkpersonaluseBlack-x3XKK'),
};

export default class Button1 extends Component {
 

  render() {
   
      return (
        <View style={styles.container}>
          <TouchableOpacity title="ttyfcd" />
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3ff98',
  },
  title: {
    fontFamily: 'Drip',
    fontSize: 30,
    marginLeft: 70,
    color: 'red',
  },
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    width: 300,
    marginLeft: 20,
    marginTop: 50,
  },
  cardText: {
    fontSize: 15,
    marginLeft: 10,
    fontFamily: 'New',
    color: '#24bab9',
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '700%',
    height: '700%',
    marginLeft: 40,
    marginTop: 40,
  },
  appTitleTextContainer: {
    justifyContent: 'center',
  },
});
