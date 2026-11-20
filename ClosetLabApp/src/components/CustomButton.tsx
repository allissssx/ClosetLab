import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomButtonProps, CustomButtonVariant } from "../utils/types/ButtonProps";


export default function CustomButton({title, onPressButton, variant = "primary", disabled=false}: CustomButtonProps){
    const styles = getStyles(variant);
    
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
            width: 180,
            paddingVertical: 14,
            paddingHorizontal: 18,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 10,
        },
        buttonText:{
            color:"white",
            fontWeight: '500',
            fontSize: variant === "tertiary" ? 11 : 15,
            letterSpacing: 0.3,
        }
    })