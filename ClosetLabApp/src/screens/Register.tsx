import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Sectiontitle from "../components/SectionTitle";


export default function Register ({navigation} : any){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [user, setUser] = useState("");

    const handleOnPressSignUp = () => {
        if (email.trim() === "" && password.trim() === ""
            && nombre.trim() === "" && password.trim() === "") {
            Alert.alert(
                "Campos obligatorios",
                "Por favor, ingrese sus datos"
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
        }


        if(password.length < 4){
            Alert.alert(
                "Esta ingresando una contraseña muy debil",
                "Por favor, ingresa una contraseña adecuada"
            );
            
            return;
        }

        navigation.navigate("LoginScreen");
    };

    const handleOnPressLogIn = () => {
        navigation.navigate("LoginScreen")
    }


    return(
        <ImageBackground
            source={require('../../assets/fondo2.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
        <View style={styles.container}>
            <Sectiontitle text= "Registrarse" tipo= "Titulo"/>
            
            <CustomInput  
                onChangeText={setNombre}
                value={nombre}
                placeholder='Nombre'
                obligatorio= {true}
            />

            <CustomInput  
                onChangeText={setApellido}
                value={apellido}
                placeholder='Apellido'
            />
            
            <CustomInput  
                onChangeText={setEmail}
                value={email}
                placeholder='Correo'
                type='email'
                obligatorio= {true}
            />

            <CustomInput  
                onChangeText={setPassword}
                value={password}
                placeholder='Contraseña'
                type='password'
                obligatorio= {true}
            />

            <CustomInput  
                onChangeText={setUser}
                value={user}
                placeholder='Nombre de usuario'
            />

            <View style ={styles.buttonsContainer}>
                <CustomButton title = "Registrarme" onPressButton={handleOnPressSignUp} />
                <View style ={styles.loginButton}>
                    <Text style={styles.text}>¿Ya tienes una cuenta?</Text>
                    <CustomButton title = "Iniciar Sesión" onPressButton={handleOnPressLogIn} variant='tertiary'/>
                </View>
               
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

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:40
  },
  buttonsContainer:{
    padding: 15,
    alignItems: "center"
  },

  loginButton:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize: 15,
    color: '#90272a', 
    fontFamily: "CormorantGaramond_600SemiBold",
    letterSpacing: 0.3,
  }
});