import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from 'react-native';


export default class Affected1 extends Component {
  render() {
   
    return (
        <ScrollView vertical={true}>
      <View
        style={{
          backgroundColor: 'white',
          height: 10000,
        }}>
      
          <Text
            style={{
              color: 'blue',
              textAlign: 'center',
              fontSize: 20,
            }}>
            CHILDREN
          </Text>
          <Image
            style={{ width: 300, height: 300, alignSelf: 'center' }}
            source={require('../assets/1.png')}
          />


          
        
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    height: 570,
    width: 320,
  },
  routeCard: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: '#aacb96',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
    fontFamily: 'Wicked',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 25,
    paddingLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
});
