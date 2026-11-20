import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


export default function Login ({navigation} : any){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnPressLogIn = () => {
        navigation.navigate("HomeScreen", {email});
    }

    const handleOnPressSignUp = () => {
        navigation.navigate("RegisterScreen")
    }

    const handleOnPressForgotPwd = () => {
        console.log("");
    }

    return(
        <View style={styles.container}>
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

            <View style ={styles.buttonsContainer}>
                <CustomButton title = "Iniciar Sesion" onPressButton={handleOnPressLogIn} />
                <CustomButton title = "Forgot your password?" onPressButton={handleOnPressForgotPwd} variant='tertiary' disabled />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  buttonsContainer:{
    padding: 15,
  }
});