import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, ToastAndroid, Button, StatusBar, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
const SignInScreen = () => {

 const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name={"closecircle"} color={"black"} size={40} style={styles.closeContainer} />
      </TouchableOpacity>
      
      <Text style={styles.textSkop}>SkopiSjiwa</Text>
      <View style={styles.containerToart}>

        <View style={styles.inPutContainer}>
          <Text style={styles.textUser} >Username</Text>

          <TextInput
            style={styles.TextInput}
            placeholder='JodieAkbar912@gmail.com'

          />
        </View>
        <View style={styles.inPutContainerPassword}>
          <Text style={styles.textUser} >Password</Text>

          <TextInput
            style={styles.TextInput}
            secureTextEntry
            placeholder='********'
          />
        </View>

        <TouchableOpacity
          style={styles.ButonLogin}
          onPress={()=>{
            navigation.navigate("HOMESCREEN");
          }}
        >

          <Text style={styles.TextLogin}> Login</Text>

        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={{ width: 50, textAlign: 'center',fontWeight:600,color:"black" }}>OR</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>
        
        <TouchableOpacity
          style={styles.ButonSignin}
        >

          <Text style={styles.TextLogin}> Sign in</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButonSigningoogle}
        >
      <Image source={require("../asset/google.png") } style={styles.imageGoogle}/>
          <Text style={styles.TextLogin}> Sign in with Google</Text>

        </TouchableOpacity>


      </View>

    </View>
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#bfbfbf',
  },
  TextInput: {
    width: 370,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,

  },
  containerToart: {
    backgroundColor: "white",
    marginTop: 20,
    paddingBottom:"100%"
  },
  inPutContainer: {
    alignSelf: "center",
    marginTop: 20,

  },
  textUser: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 20,
    color: "#000000",
    marginTop: 20
  },
  inPutContainerPassword: {
    alignSelf: "center",

  },
  TextLogin: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 24,
    color: "#000000",
    padding: 10,
    textAlign: "center"
  },
  ButonLogin: {
    width: 369,
    alignSelf: "center",
    backgroundColor: "#D5D5D5",
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 20,
    justifyContent: "center"


  },
  ButonSignin:{
    width: 369,
    alignSelf: "center",
    
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 20,
    justifyContent: "center"
  },
  ButonSigningoogle:{
    width: 369,
    alignSelf: "center",
    flexDirection:"row",
    alignItems:"center",
    borderRadius: 10,
    borderWidth: 1,
   
    justifyContent: "center"
  },
  imageGoogle:{
    width:33,
    height:33,
    
  },
  textSkop:{
    textAlign:"center",
    fontSize:40,
    
    marginTop:60
  }
});

export default SignInScreen;