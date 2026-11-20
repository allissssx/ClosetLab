import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {View, TextInput, StyleSheet, KeyboardTypeOptions, TouchableOpacity, Text,} from "react-native";

type Props = {
    onChangeText: (text: string) => void;
    type?: "default" | "email" | "password" | "number";
    value: string;
    placeholder: string;
};

export default function CustomInput({onChangeText, type = "default", value, placeholder}: Props) {

    const [isSecureText, setIsSecureText] = useState(type === "password");

    const getError = () => {
        if (type === "email" && !value.includes("@") && value != "") return "Correo invalido";
        if (type === "password" && value.length < 4) return "La contraseña es debil"
    }

    const icon: (typeof MaterialIcons)["name"] | undefined =
        type === "password" ? "lock" : type === 'email' ? "email" : undefined

    const keyboardType: KeyboardTypeOptions =
        type === "email" ? "email-address" : type === "number" ? "numeric" : "default";

    const isPasswordField = type === "password";
    const error = getError();


    return (
        <View style={styles.wrapper}>
            <View style={styles.inputContainer}>
                <MaterialIcons name={icon as any} size={22} color={"black"} />
                <TextInput style={styles.input} placeholder={placeholder} value={value} 
                onChangeText={onChangeText} keyboardType={keyboardType} secureTextEntry={isSecureText}/>

            {isPasswordField && (
                <TouchableOpacity onPress={() => {setIsSecureText(!isSecureText);}}>
                    <Ionicons
                        name={isSecureText ? "eye-off" : "eye"}
                        size={22}
                        color={"black"}
                    />
                </TouchableOpacity>
            )}
            </View>
            <Text>{error}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    wrapper:{
        paddingTop: 10,
        marginBottom: 5,
        alignSelf:'center'
    },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingRight: 14,
    width: 200,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    fontSize: 15,
    paddingVertical: 5,
  },
});