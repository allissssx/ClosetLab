import {StyleSheet, Text, View } from "react-native";

type TitleTypes = "Titulo" | "Subtitulo" 
type Props = {
    text: string,
    tipo: TitleTypes
};

export default function Sectiontitle({text, tipo}: Props){
    const styles = getStyles(tipo);

    return(
        <View>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
}

const getStyles = (tipo: TitleTypes) => 
    StyleSheet.create({
    title:{
        fontFamily: 'PirataOne_400Regular',
        fontSize: tipo==='Titulo' ? 60 : 25,
        color: tipo==='Titulo' ? '#651d20' : '#b7b4ae', 
        textAlign: "center"
    }
    });