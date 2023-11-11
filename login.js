import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourName: '',
    };
  }

  saveNameTo = async (yourName) => {
    db.collection('id').add({
      userName: yourName,
    });

    this.setState({
      yourName: '',
    });
  };
  render() {
    return (
      <View>
        <View style={styles.headingOut}>
          <Text style={styles.heading}>Login To Proceed</Text>
        </View>

        <TextInput
          style={styles.input1}
          placeholder="YOUR NAME"
          onChangeText={(text) =>
            this.setState({
              yourName: text,
            })
          }
          value={this.state.yourName}
        />

        <TouchableOpacity
          style={styles.input1}
          onPress={() => {
            this.saveNameTo(this.state.yourName);
          }}>
          SUBMIT
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red',
    fontWeight: 0,
    backgroundColor: 'yellow',
    width: 320,
    height: 40,
    alignSelf: 'center',
    paddingVertical: 8,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 1,
  },
  headingOut: {
    paddingVertical: 50,
  },
  inputOut: {
    paddingVertical: 15,
  },
  input1: {
    backgroundColor: 'pink',
    flex: 'row',
    width: 250,
    height: 40,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    borderWidth: 3,
  },
  input2: {
    backgroundColor: 'pink',
    flex: 'row',
    width: 250,
    height: 40,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    borderWidth: 3,
  },
});
