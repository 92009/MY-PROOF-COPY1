import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  Image,
} from 'react-native';
import plants from '../database';
import * as Font from 'expo-font';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      text: '',
      isSearchPressed: false,
      plantName: '',
      wayToGrow: '',
      season: '',
      months: '',
      address: '',
      available: '',
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  getWord = (text) => {
    text = text.toLowerCase();

    try {
      var plantName = plants[text]['name'];
      var wayToGrow = plants[text]['occupation'];
      var season = plants[text]['experience'];
      var months = plants[text]['fees'];
      var address = plants[text]['address'];
      var available = plants[text]['available'];

      this.setState({
        plantName: plantName,
        wayToGrow: wayToGrow,
        season: season,
        months: months,
        address: address,
        available: available,
        text: '',
      });
    } catch (err) {
      alert('Sorry This city is not available for now');
      this.setState({
        text: '',
        isSearchPressed: false,
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{
            marginTop: 12,
            alignSelf: 'center',
            width: 200,
            height: 70,
          }}
          source={require('../assets/doc.png')}
        />

        <Text style={styles.title}>DOCTORS NEAR</Text>

        <View style={styles.upperContainer}>
          <View style={styles.textinputContainer}>
            <TextInput
              style={styles.textinput}
              placeholder="Your City"
              onChangeText={(text) => {
                this.setState({
                  text: text,
                  plantName: '',
                  wayToGrow: '',
                  months: '',
                  season: '',
                });
              }}
              value={this.state.text}
            />
            <TouchableOpacity
              style={styles.searchbutton}
              onPress={() => {
                this.getWord(this.state.text);
              }}>
              <Text style={styles.searchbuttonText}>SEARCH</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.outputContainer}>
          <Text style={{ fontSize: 20 }}>
            {this.state.isSearchPressed && this.state.plantName === ''
              ? this.state.word
              : ''}
          </Text>
          {this.state.plantName !== '' ? (
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Name : </Text>
                <Text style={{ fontSize: 18 }}>{this.state.plantName}</Text>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.detailsTitle}>Occupation : </Text>
                <Text style={{ fontSize: 18 }}>{this.state.wayToGrow}</Text>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.detailsTitle}>Experience : </Text>
                <Text style={{ fontSize: 18 }}>{this.state.season}</Text>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.detailsTitle}>Fees : </Text>
                <Text style={{ fontSize: 18 }}>{this.state.months}</Text>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.detailsTitle}>Address : </Text>
                <Text style={{ fontSize: 18 }}>{this.state.address}</Text>
              </View>

              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.detailsTitle}>Available : </Text>
                <Text style={{ fontSize: 18 }}>{this.state.available}</Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4E869',
    height: 539,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 2,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Wicked',
    color: 'green',
  },
  outputContainer: {
    flex: 0.1,
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsTitle: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bc: {
    marginLeft: 20,
    height: 100,
    width: 300,
    marginTop: 4,
  },
  upperContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'green',
    borderColor: '#FFFFFF',
  },
  textinput: {
    width: '57%',
    height: 50,
    padding: 10,
    borderColor: 'green',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 5,
    fontSize: 18,
    backgroundColor: '#F2BE22',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
  },
  searchbutton: {
    width: 150,
    height: 50,
    backgroundColor: '#F29727',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbuttonText: {
    fontSize: 24,
    color: '#0A0101',
    fontWeight: 'bold',
  },
});
