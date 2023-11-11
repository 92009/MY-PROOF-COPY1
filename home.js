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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return (
        <View>
          <Text>load</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/symbol.png')}></Image>
          <Text style={styles.title}>CONTROL ANEMIA</Text>

          <View
            style={{
              backgroundColor: 'blue',
              width: 300,
              height: 545,
              alignSelf: 'center',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              paddingTop: 5,
            }}>
            <View
              style={{
                backgroundColor: 'yellow',
                width: 290,
                height: 535,
                alignSelf: 'center',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                Patient Age Group
              </Text>

              <TouchableOpacity
                backgroundColor="pink"
                width="190"
                textAlign="center"
                alignSelf="center"
                marginTop="50"
                fontSize="20"
                borderTopRightRadius="10"
                borderTopLeftRadius="10"
                borderWidth="4"
                onPress={() => this.props.navigation.navigate('Example')}>
                INFANTS
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'pink',
                  width: 190,
                  textAlign: 'center',
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize: 20,

                  borderWidth: 4,
                }}>
                CHILDREN(6 TO 13)
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'pink',
                  width: 190,
                  textAlign: 'center',
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize: 20,

                  borderWidth: 4,
                }}>
                ADOLESCENTS
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'pink',
                  width: 190,
                  textAlign: 'center',
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize: 20,

                  borderWidth: 4,
                }}>
                WOMENS
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'pink',
                  width: 190,
                  textAlign: 'center',
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize: 20,

                  borderWidth: 4,
                }}>
                MENS
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'pink',
                  width: 190,
                  textAlign: 'center',
                  alignSelf: 'center',
                  marginTop: 50,
                  fontSize: 20,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderWidth: 4,
                }}>
                ELDERLY
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
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
