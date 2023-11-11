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

export default class Mens1 extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#99E1D9',
        }}>
        <ScrollView vertical={true}>
          <Image
            style={{
              width: 70,
              height: 70,
              alignSelf: 'center',
            }}
            source={require('../assets/msym.png')}
          />

          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 20,
            }}>
            MENS{' '}
          </Text>

          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Anemia in newborns is a condition where the baby’s body has a lower
            red blood cell count than normal. This can happen for several
            reasons, including if the baby is premature, the red blood cells
            break down too quickly, the body doesn’t create enough red blood
            cells or the baby loses too much blood. Many babies do not need
            treatment for anemia.
          </Text>

          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 20,
            }}>
            CAUSES
          </Text>

          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            A newborn can develop anemia for several reasons. These can include:
          </Text>

          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
            }}>
            ◉ The baby’s body does not produce enough red blood cells.
          </Text>

          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Most babies have some anemia in the first few months of life. This
            is known as physiologic anemia. The reason this anemia occurs is
            that baby’s body is growing fast and it takes time for red blood
            cell production to catch up..
          </Text>

          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
            }}>
            ◉ The body breaks down red blood cells too quickly.
          </Text>

          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            This problem is common when the mother’s and baby’s blood types do
            not match. This is called Rh/ABO incompatibility. These babies
            usually have jaundice (hyperbilirubenemia), which can cause their
            skin to turn yellow. In a few babies, anemia can also be caused by
            infections or genetic (inherited) disorders.
          </Text>

          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 20,
            }}>
            SYMPTOMS
          </Text>

          <Image
            style={{
              width: 300,
              height: 400,
              alignSelf: 'center',
            }}
            source={require('../assets/m.png')}
          />

          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 20,
            }}>
            DIAGNOSIS AND TESTS
          </Text>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Anemia is diagnosed with a blood test by your healthcare provider.
            Tests that are used to help diagnose anemia include measurements of
            the following:
          </Text>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            ◉ Hemoglobin: The protein in red blood cells that carries oxygen.
          </Text>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            ◉ Hematocrit: The percentage of blood that is made up of red blood
            cells.
          </Text>
          <Text
            style={{
              color: 'blue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            ◉ Reticulocytes: The percentage of immature red blood cells in the
            blood. This is a measure of how many new cells are being created.
          </Text>
       </ScrollView>
      </View>
      
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
