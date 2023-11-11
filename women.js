import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,  ScrollView
} from 'react-native';

export default class Womens1 extends Component {
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
          source={require('../assets/wsym.png')}
        />

        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 20,
          }}>
          WOMENS
        </Text>

        <Text
          style={{
            color: 'blue',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Among pregnant women, iron deficiency anemia is also associated with
          adverse reproductive outcomes such as preterm delivery,
          low-birth-weight infants, and decreased iron stores for the baby,
          which may lead to impaired development. This visualization presents
          estimates of the prevalence of anemia in women of reproductive age by
          pregnancy status and in children aged 6-59 months. The prevalence of
          anemia is an indicator of both poor nutrition and poor health.
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
          The most common type of anemia worldwide is iron deficiency anemia,
          which is caused by a shortage of iron. Women are especially likely to
          develop this type of anemia for several reasons. First, women aged 12
          to 49 lose blood approximately once a month during their periods. Iron
          is needed to make the new blood that replaces the blood lost with each
          menstrual period. The risk of anemia is higher among women with
          periods that are especially long or include very heavy bleeding. Some
          women also lose iron from uterine fibroids (non-cancerous growths in
          the womb) that bleed slowly, or from bleeding caused by using certain
          intrauterine devices (IUDs) for birth control. Second, women need
          extra iron during pregnancy for the proper development of their
          babies. In fact, pregnant women need 50 percent more iron than usual
          (27 mg per day instead of the usual 18 mg per day). Women also lose
          blood during childbirth. It is important for women who are pregnant or
          plan to become pregnant to have their iron levels checked and to tell
          their health care providers about any symptoms of anemia. Prenatal
          vitamins contain iron and can help prevent low iron levels and
          pregnancy-related anemia.
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
          source={require('../assets/w.png')}
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
          With diagnosis and treatment, the effects of anemia can be greatly
          reduced. Anemia is usually diagnosed by measuring hemoglobin and
          hematocrit (HCT). HCT is the percentage of red blood cells in the
          blood. Hemoglobin and hematocrit are measured as part of a routine
          blood test called a complete blood count (CBC). A CBC should be done
          as part of your regular health exams (checkups).
        </Text>
        <Text
          style={{
            color: 'blue',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          ◉ HGB levels for women should be about 12 grams per deciliter (g/dL) –
          a HGB level of less than 6.5 g/dL is very dangerous and could be
          life-threatening
        </Text>
        <Text
          style={{
            color: 'blue',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          ◉ HCT levels for women should be 35 percent to 46 percent cells.
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
