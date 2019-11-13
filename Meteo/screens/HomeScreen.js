import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {TextInput, StyleSheet, Image, View, Button} from 'react-native';
// 4

// class SearchScreen extends React.Component() {

//   constructor (props) {
//     super(props)
//     this.state = {
//       city : 'Athis-Mons'
//     }
//   }

//   setCity (city){
//       this.setCity({city})
//   }
// };
// onChangeText={(text) => this.setCity(text)} value= {this.state.city} 
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} underlineColorAndroid='transparent'value='Athis-Mons' ></TextInput>
      <Button color= '#44a69e' onPress={() => this.serch()} title='Rechercher une ville'/>
      <Image style={styles.Image} source={{uri: 'https://freepngimg.com/thumb/weather/23793-9-weather-photos.png'}}/>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Weather',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44a69e', 
  },
  Image:{
    flex: 1,
    height : 20,


  },
  TextInput:{
    height: 40,
    backgroundColor : '#fff',
    paddingHorizontal : 20,
    marginHorizontal: 20,
    marginVertical : 20,
  }
 }
) ;
