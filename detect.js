import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
} from 'react-native';
import { Drawer, FloatButton } from 'antd';
import { CopyOutlined } from '@ant-design/icons';


const Detect = () => {
  const [inputValue, setInputValue] = useState('');
  const checkValueIsNumberOrNot = () => {
    if (isNaN(inputValue)) {
      alert('IT IS NOT HEMOGLOBIN COUNT');
    } else if (inputValue >= 13) {
      alert('YOU ARE ANEMIA FREE');
    } else if (inputValue == 12) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 11) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 10) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 9) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 8) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 7) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 6) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue <= 5) {
      alert('YOUR ANEMIC STAGE IS CRITICAL');
    }
  };

  const checkValueIsNumberOrNotFemale = () => {
    if (isNaN(inputValue)) {
      alert('IT IS NOT HEMOGLOBIN COUNT');
    } else if (inputValue >= 12) {
      alert('YOU ARE ANEMIA FREE');
    } else if (inputValue == 12) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 11) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 10) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 9) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 8) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 7) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue == 6) {
      alert('YOU ARE ANEMIC');
    } else if (inputValue <= 5) {
      alert('YOUR ANEMIC STAGE IS CRITICAL');
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 42,
        }}>
        DETECT ANEMIA
      </Text>


 <Text style={{
   fontSize: 22,
   marginBottom: 10,
   color: 'white'
 }}>MALE</Text>
      <View style={styles.textinputContainer}>
     
        <View
          style={{
            backgroundColor: 'red',
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              marginTop: -2,
              width: 156,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            HEMOGLOBIN LEVEL (G/DL)
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: -2,
              width: 156,
              textAlign: 'center',
              fontWeight: 'bold',
            }}></Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            marginLeft: 1,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            width: 139,
            height: 40,
            alignSelf: 'center',
          }}>
          <TextInput
            placeholder="Enter text"
            onChangeText={(inputValue) => setInputValue(inputValue)}
            style={styles.textInputStyle}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 50,
        }}>
        <Button
          title=" SUBMIT "
          onPress={checkValueIsNumberOrNot}
          color="black"
        />
      </View>


 <Text style={{
   fontSize: 22,
   marginBottom: 10,
   marginTop: 12,
    color: 'white'
 }}>FEMALE</Text>
      <View style={styles.textinputContainer}>
        <View
          style={{
            backgroundColor: 'red',
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              marginTop: -2,
              width: 156,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            HEMOGLOBIN LEVEL (G/DL)
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: -2,
              width: 156,
              textAlign: 'center',
              fontWeight: 'bold',
            }}></Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            marginLeft: 1,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            width: 139,
            height: 40,
            alignSelf: 'center',
          }}>
          <TextInput
            placeholder="Enter text"
            onChangeText={(inputValue) => setInputValue(inputValue)}
            style={styles.textInputStyle}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 50,
        }}>
        <Button
          title=" SUBMIT "
          onPress={checkValueIsNumberOrNotFemale}
          color="black"
        />
      </View>





      <FloatButton
        icon={<CopyOutlined />}
        description="Survey"
        onClick={() => setOpen(true)}
        style={{ width: 80, height: 80, bottom: 64, right: 24 }}
      />
      <Drawer
        title="Survey"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size="large">
        <iframe
          title="Survey"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfsBQXkxSf_LK7UEuiNBEXDOanHs4rNNH5qO3KX2FvhJhY-1w/viewform?usp=sf_link"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{ width: '100%', height: 'calc(100% - 3px)' }}>
          Loading…
        </iframe>
      </Drawer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'grey',
    height: 700,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: 140,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    fontSize: 20,
    borderWidth: 1,
    backgroundColor: 'yellow',
  },
  textinputContainer: {
    borderWidth: 3,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: 'brown',
    borderColor: 'black',
    width: 303,
    height: 49,
  },
});

export default Detect;
