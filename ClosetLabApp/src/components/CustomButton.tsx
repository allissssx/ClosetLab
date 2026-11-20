import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomButtonProps, CustomButtonVariant } from "../utils/types/ButtonProps";
import { useFonts } from "@expo-google-fonts/cormorant-garamond";
import {
    CormorantGaramond_400Regular,
    CormorantGaramond_500Medium,
    CormorantGaramond_600SemiBold,
    CormorantGaramond_700Bold,
} from "@expo-google-fonts/cormorant-garamond";


export default function CustomButton({title, onPressButton, variant = "primary", disabled=false}: CustomButtonProps){
    const styles = getStyles(variant);

    const [fontsLoaded] = useFonts({
        CormorantGaramond_400Regular,
        CormorantGaramond_500Medium,
        CormorantGaramond_600SemiBold,
        CormorantGaramond_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }
    
    return(
        <Pressable style={styles.button} onPress={onPressButton} disabled={disabled}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}

const getStyles = (variant: CustomButtonVariant) => 
    StyleSheet.create({
        button:{
        backgroundColor: variant === "primary" ? '#471C1E' : 
                                variant === "secondary" ?  '#333230' : 'transparent' ,
            width: 250,
            paddingVertical: variant === "tertiary" ? 5 : 17,
            paddingHorizontal: 18,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: variant === "tertiary" ? 3 : 15,
        },
        buttonText:{
            color:"white",
            fontWeight: '500',
            fontSize: variant === "tertiary" ? 15 : 20,
            letterSpacing: 0.3,
            fontFamily: "CormorantGaramond_400Regular"

        }
    })