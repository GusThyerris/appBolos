import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return (
    <Button
    title="Go to Jane's profile"
    onPress={() =>
      navigation.navigate('Profile', {name: 'Jane'})
    }
  />
  );
};
const redVelvet = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const Home = () => {
  return (
    <NavigationContainer>
      {    <ScrollView style={styles.body}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Sabores de bolo</Text>
      </View>

      <Text style={styles.subtitles}>Red Velvet</Text>
      <View style={styles.container}>
        <Image style={styles.img} source={require('assets/bolored.jpg')} />
      </View>
      <Text style={styles.subtitles}>Chocolate</Text>
      <View style={styles.container}>
        <Image style={styles.img} source={require('assets/bolochoco.png')} />
      </View>

      <Text style={styles.subtitles}>Cenoura</Text>
      <View  style={styles.container}>
        <Image style={styles.img} source={require('assets/bolocenoure.png')} />
      </View>
    </ScrollView>}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#FFE4B5'
  },
  title_container: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: '#F4A460'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 50
    // fontWeigh: 'bold'
  },
  container: {
    flex: 1,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    margin: 8,
    justifyContent: 'center',

    // height: 200
  },
  subtitles: {
    // backgroundColor: '#2334',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'oldenrod'
  },
  img: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    borderRadius:10
  }

});


export default Home;