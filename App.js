import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Infants1 from './screen/infants';
import Children1 from './screen/children';
import Adolescents1 from './screen/adolescents';
import Womens1 from './screen/women';
import Mens1 from './screen/men';
import Elderly1 from './screen/elderly';
import Search from './screen/search';
import Detect from './screen/detect';
import Affected1 from './screen/affected';
import  Button1 from './screen/button';

function Profile({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#26577C',
      }}>
      <Image
        style={{
          width: 240,
          height: 90,
        }}
        source={require('./assets/RE.png')}></Image>
    

      <View
        style={{
          backgroundColor: '#E55604',
          width: 300,
          height: 445,
          alignSelf: 'center',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingTop: 5,
        }}>
        <View
          style={{
            backgroundColor: '#B4B4B3',
            width: 290,
            height: 435,
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

          <View
            style={{
              marginBottom: 22,
              marginTop: 32,
              width: 190,
              alignSelf: 'center',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              borderWidth: 4,
            }}>
            <Button
              color="#E55604"
              width="190"
              textAlign="center"
              alignSelf="center"
              marginTop="50"
              fontSize="20"
              borderTopRightRadius="10"
              borderTopLeftRadius="10"
              borderWidth="4"
              onPress={() => navigation.navigate('INFANTS')}
              title="INFANTS"
            />
          </View>

          <View
            style={{
              marginBottom: 22,
              width: 190,
              alignSelf: 'center',
              borderWidth: 4,
            }}>
            <Button
              color="#F2BE22"
              width="190"
              textAlign="center"
              alignSelf="center"
              marginTop="50"
              fontSize="20"
              borderTopRightRadius="10"
              borderTopLeftRadius="10"
              borderWidth="4"
              onPress={() => navigation.navigate('CHILDREN')}
              title="CHILDREN(6 TO 13)"
            />
          </View>

          <View
            style={{
              marginBottom: 22,
              width: 190,
              alignSelf: 'center',
              borderWidth: 4,
            }}>
            <Button
              color="#E55604"
              width="190"
              textAlign="center"
              alignSelf="center"
              marginTop="50"
              fontSize="20"
              fontFamily="comic sans ms"
              borderTopRightRadius="10"
              borderTopLeftRadius="10"
              borderWidth="4"
              onPress={() => navigation.navigate('ADOLESCENTS')}
              title="ADOLESCENTS"
            />
          </View>

          <View
            style={{
              marginBottom: 22,
              width: 190,
              alignSelf: 'center',
              borderWidth: 4,
            }}>
            <Button
              color="#F2BE22"
              width="190"
              textAlign="center"
              alignSelf="center"
              marginTop="50"
              fontSize="20"
              borderTopRightRadius="10"
              borderTopLeftRadius="10"
              borderWidth="4"
              onPress={() => navigation.navigate('WOMENS')}
              title="WOMENS"
            />
          </View>

          <View
            style={{
              marginBottom: 22,
              width: 190,
              alignSelf: 'center',
              borderWidth: 4,
            }}>
            <Button
              color="#E55604"
              width="190"
              textAlign="center"
              alignSelf="center"
              marginTop="50"
              fontSize="20"
              borderTopRightRadius="10"
              borderTopLeftRadius="10"
              borderWidth="4"
              onPress={() => navigation.navigate('MENS')}
              title="MENS"
            />
          </View>

          <View
            style={{
              marginBottom: 22,
              width: 190,
              alignSelf: 'center',
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderWidth: 4,
            }}>
            <Button
              color="#F2BE22"
              width="190"
              textAlign="center"
              alignSelf="center"
              marginTop="50"
              fontSize="20"
              borderTopRightRadius="10"
              borderTopLeftRadius="10"
              borderWidth="4"
              onPress={() => navigation.navigate('ELDERLIES')}
              title="ELDERLY"
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function Infants() {
  return (
    <View>
      <Infants1 />
    </View>
  );
}

function Children() {
  return (
    <View>
      <Children1 />
    </View>
  );
}
function Adolescents() {
  return (
    <View>
      <Adolescents1 />
    </View>
  );
}
function Women() {
  return (
    <View>
      <Womens1 />
    </View>
  );
}
function Men() {
  return (
    <View>
      <Mens1 />
    </View>
  );
}
function Elderly() {
  return (
    <View>
      <Elderly1 />
    </View>
  );
}

function MoreInfo() {
  return (
    <View>
    <Detect/>
    </View>
  );
}
function Affected() {
  return (
    <View>
    <Affected1/>
    </View>
  );
}

function World() {
  return (
    <View>
      <Search />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = 'home-outline';
            size = 20;
          } else if (route.name === 'DETECTOR') {
            iconName = 'bandage-outline';
            size = 20;
          } else if (route.name === 'SEARCH') {
            iconName = 'search';
            size = 20;
          } else if (route.name === 'AFFECTED') {
            iconName = 'man-outline';
            size = 20;
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        style: {
          height: 100,
          borderTopWidth: 0,
          backgroundColor: '#F88379',
        },
        labelStyle: {
          fontSize: 15,
        },
        labelPosition: 'below-icon',
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>

   
      <Tab.Screen name="HOME" component={Profile} />
      <Tab.Screen name="AFFECTED" component={Affected} />
      <Tab.Screen name="SEARCH" component={World} />
      <Tab.Screen name="DETECTOR" component={MoreInfo} />
      
      
    
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="INFANTS" component={Infants} />
        <Stack.Screen name="CHILDREN" component={Children} />
        <Stack.Screen name="ADOLESCENTS" component={Adolescents} />
        <Stack.Screen name="WOMENS" component={Women} />
        <Stack.Screen name="MENS" component={Men} />
        <Stack.Screen name="ELDERLIES" component={Elderly} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
