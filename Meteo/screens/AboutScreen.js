import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default class AboutScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://media.licdn.com/dms/image/C5603AQFb4nEI6UKjaQ/profile-displayphoto-shrink_200_200/0?e=1579132800&v=beta&t=GO-z660TigTlN7svuPn6DuT1GyezroaN40YJBWxNwyg'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>METEO TRAINING APP</Text>
              <Text style={styles.info}>By Hydri</Text>
              <Text style={styles.description}>About US : Application Météo développé par Doryan Lievre, élève de la CodingFactory actuellement en recherche d'alternance</Text>
              <TouchableOpacity style={styles.buttonCommentContainer}>
                <Text>Linkedin</Text>  
              </TouchableOpacity> 
              <TouchableOpacity style={styles.buttonCommentContainer}>
                <Text>Github</Text>  
              </TouchableOpacity>  
              <TouchableOpacity style={styles.buttonCommentContainer}>
                <Text>mail : dliever.dev@gmaiL.com</Text>  
              </TouchableOpacity>  
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
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
    color: "#00BFFF",
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
    backgroundColor: "#00BFFF",
  },
  buttonCommentContainer: {
    marginTop:50,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});

AboutScreen.navigationOptions = {
  title: 'About us',
};
