import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';


class SearchScreen extends React.Component() {

  constructor (props) {
    super(props)
    this.state = {
      city : 'Athis-Mons'
    }
  }

  setCity (city){
      this.setCity({city})
  }

  render (){
    return (
      <View style={styles.container}>
        <TextInput style={styles.TextInput} underlineColorAndroid='transparent' onChangeText={(text) => this.setCity(text)} value= {this.state.city} >
  
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#44a69e',
    
  },
  TextInput:{
    height: 40,
    backgroundColor : '#fff',
    paddingHorizontal : 20,
    marginHorizontal: 20,
    marginVertical : 20,
  }
});

export default SearchScreen;
