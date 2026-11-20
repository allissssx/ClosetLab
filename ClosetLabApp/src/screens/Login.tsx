import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


export default function Login ({navigation} : any){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnPressLogIn = () => {
        if (email.trim() === "" && password.trim() === "") {
            Alert.alert(
                "Campos obligatorios",
                "Por favor, ingresa tu correo y contraseña."
            );
            return;
        }

        if (email.trim() === "") {
            Alert.alert(
                "Correo requerido",
                "Por favor, ingresa tu correo electrónico."
            );
            return;
        }

        if (password.trim() === "") {
            Alert.alert(
                "Contraseña requerida",
                "Por favor, ingresa tu contraseña."
            );
        return;
        }

        if(!email.includes("@")){
            Alert.alert(
                "Esta ingresando un correo invalido",
                "Por favor, ingresa un correo valido"
            );
            
            return;
        }

        navigation.navigate("HomeScreen", { email: email.trim() });
    };

    const handleOnPressSignUp = () => {
        navigation.navigate("RegisterScreen")
    }

    const handleOnPressForgotPwd = () => {
        console.log("");
    }


    return(
        <ImageBackground
      source={require('../../assets/fondo.jpg')}
            style={styles.background}
      resizeMode="cover"
    >
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            
            <CustomInput  
                onChangeText={setEmail}
                value={email}
                placeholder='Correo'
                type='email'
            />

            <CustomInput  
                onChangeText={setPassword}
                value={password}
                placeholder='Contraseña'
                type='password'
            />
            <CustomButton title = "¿Olvidaste tu contraseña?" onPressButton={handleOnPressForgotPwd} variant='tertiary' disabled />


            <View style ={styles.buttonsContainer}>
                <CustomButton title = "Iniciar Sesión" onPressButton={handleOnPressLogIn} />
                <CustomButton title = "Registrarse" onPressButton={handleOnPressSignUp} variant='secondary'/>
            </View>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title:{
    fontSize: 60,
    color: '#651d20', 
    paddingBottom: 30,
    fontFamily: "PirataOne_400Regular"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:40
  },
  buttonsContainer:{
    padding: 15,
    alignItems: "center"
  }
});