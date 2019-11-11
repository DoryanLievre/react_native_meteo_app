import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import AboutScreen from '../screens/AboutScreen'
class AboutScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://media.licdn.com/dms/image/C5603AQFb4nEI6UKjaQ/profile-displayphoto-shrink_200_200/0?e=1579132800&v=beta&t=GO-z660TigTlN7svuPn6DuT1GyezroaN40YJBWxNwyg'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>METEO TRAINING APP</Text>
              <Text style={styles.info}>By Hydri</Text>
              <Text style={styles.description}>About ME : Application Météo développé par Doryan Lievre, élève de la CodingFactory actuellement en recherche d'alternance</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Linkedin</Text>  
              </TouchableOpacity> 
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Github</Text>  
              </TouchableOpacity>  
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>mail : dliever.dev@gmail.com</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#44a69e",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#ced1d6",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    textAlign : "center",
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#44a69e",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#44a69e",
  },
  buttonCommentContainer: {
    marginTop:50,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:25,
    width:250,
    borderRadius:30,
    backgroundColor: "#44a69e",
  },
});

AboutScreen.navigationOptions = {
  title: 'About us',
};

export default function App() {
  return (
    <View style={styles.container}>
      <AboutScreen/>
    </View>
  );
}