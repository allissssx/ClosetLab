import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {View, TextInput, StyleSheet, KeyboardTypeOptions, TouchableOpacity, Text,} from "react-native";

type CustomInputTypes = "default" | "email" | "password" | "number";
type Props = {
    onChangeText: (text: string) => void;
    type?: CustomInputTypes;
    value: string;
    placeholder: string;
};

export default function CustomInput({onChangeText, type = "default", value, placeholder}: Props) {
        const styles = getStyles(type);

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
            <Text style={styles.text}>{error}</Text>
        </View>
  );
}

const getStyles = (type: CustomInputTypes) => 
    StyleSheet.create({    
        wrapper:{
        margin: 5,
        alignSelf:'center'
    },
    inputContainer: {
        backgroundColor: "#aeb0b7",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: type=== "password" ? "space-between" : undefined,
        paddingVertical: 5,
        width: "100%",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 14,
    },
    input: {
        flex:1,
        fontSize: 15,
        paddingVertical: 5,
        color: "black",
        textAlign: "left",
        fontFamily: "CormorantGaramond_400Regular"
    },
    text: {
        color: "white",
        fontFamily: "CormorantGaramond_400Regular"
    }
});