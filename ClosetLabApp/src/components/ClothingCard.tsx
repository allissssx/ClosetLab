import { View, Image, Text, StyleSheet } from "react-native";

type cardProps= {
    name: string;
    categoria: string;
    image: any;
}

export default function ClothingCard({name, categoria, image}: cardProps){

    return(
        <View style={styles.container}>
            <Image source={image} style={styles.imagen}/>
            <Text style={styles.nombre}>{name}</Text>
            <Text style={styles.categ}>{categoria}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: '#33312f',
        borderRadius: 10,
        padding: 6,
        width: '48%',
        backgroundColor: '#0a0a0a'
    },

    imagen:{
        width: '100%',
        height: 180,
        borderRadius: 10,
        resizeMode: 'cover'
    },

    nombre:{
        fontFamily: 'CormorantGaramond_600SemiBold',
        fontSize: 20,
        color: '#622427',
        textAlign: 'center'
    },

    categ:{
        fontFamily: 'CormorantGaramond_400Regular',
        fontSize: 15,
        color: '#726e68',
        textAlign: 'center'
    }
});