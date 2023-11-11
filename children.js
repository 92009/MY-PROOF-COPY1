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

export default class Children1 extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#99E1D9',
        }}>
        <ScrollView vertical={true}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
            }}
            source={require('../assets/child.png')}
          />

          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 20,
            }}>
            CHILDREN
          </Text>

          <Text
            style={{
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            Anemia is a common health problem in children. The most common cause
            of anemia is not getting enough iron. A child who is anemic does not
            have enough red blood cells or enough hemoglobin. Hemoglobin is a
            protein that lets red blood cells carry oxygen to other cells in the
            body. Iron is needed to form hemoglobin.
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
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            A child can develop anemia for several reasons. These can include:
          </Text>

          <Text
            style={{
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            ◉ Diets low in iron:
          </Text>

          <Text
            style={{
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            1. A child gets iron from the food in his or her diet. But, only a
            small amount of the iron in food is actually absorbed by the body.
          </Text>

          <Text
            style={{
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            2. Full-term newborns, born to healthy mothers, have iron that they
            get during the last 3 months of pregnancy.
          </Text>

          <Text
            style={{
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            3. Infants of mothers with anemia or other health problems may not
            have enough iron stored. And infants born early may not get enough
            iron.
          </Text>

          <Text
            style={{
              color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            4. At 4 to 6 months of age, the iron stored during pregnancy is at a
            low level. And more iron is used as the infant grows.
          </Text>

          <Text
            style={{
             color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}></Text>

          <Text
            style={{
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            5. Older infants and toddlers may not get enough iron from their
            diets.
          </Text>

          <Text
            style={{
              color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            ◉ Body changes: When the body goes through a growth spurt, it needs
            more iron for making more red blood cells.
          </Text>

          <Text
            style={{
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            ◉ Gastrointestinal tract problems: Poor absorption of iron is common
            after some forms of gastrointestinal surgeries. When you eat foods
            containing iron, most of the iron is absorbed in the upper small
            intestine. Any abnormalities in the gastrointestinal (GI) tract
            could alter iron absorption and cause iron-deficiency anemia.
          </Text>
          <Text
            style={{
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            ◉ Blood loss. Loss of blood can cause a decrease of iron. Sources of
            blood loss may include gastrointestinal bleeding, menstrual
            bleeding, or injury.
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
              height: 300,
              alignSelf: 'center',
            }}
            source={require('../assets/sym.png')}
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
               color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            In most cases, anemia is diagnosed with simple blood tests. Routine
            anemia screening is done because anemia is common in children and
            they often have no symptoms.The screening should also include a risk
            assessment. This is a group of questions to find risk factors for
            iron-deficiency anemia. Risk factors include feeding problems, poor
            growth, and special healthcare needs. If the hemoglobin level is
            low, more blood tests are done. If your child has a risk factor at
            any age, blood tests are done. Blood tests for anemia may also be
            done during routine physical exam or checkups in children of any
            age. Most anemia in children is diagnosed with these blood tests:
          </Text>
          <Text
            style={{
             color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            ◉ Hemoglobin and hematocrit: This is often the first screening test
            for anemia in children. It measures the amount of hemoglobin and red
            blood cells in the blood.
          </Text>
          <Text
            style={{
             color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            ◉ Complete blood count (CBC): A complete blood count checks the red
            and white blood cells, blood clotting cells (platelets), and
            sometimes, young red blood cells (reticulocytes). It includes
            hemoglobin and hematocrit and more details about the red blood
            cells. cells.
          </Text>
          <Text
            style={{
              color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            ◉ Peripheral smear: A small sample of blood is examined under a
            microscope. Blood cells are checked to see if they look normal or
            not.
          </Text>
          <Text
            style={{
              color: '#5D576B',
          fontWeight: 'bold',
          textAlign: 'center',
            }}>
            ◉ Iron studies. Blood tests can be done to measure the amount of
            iron in your child's body.
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
