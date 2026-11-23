import { View, Image, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

type cardProps= {
    name: string;
    categoria: string;
    image: any;
    venta?: boolean;
    precio?: number;
}

export default function ClothingCard({name, categoria, image, venta=false, precio= 0}: cardProps){
const formatearPrecio = (precio: number): string => {
  return `L ${precio.toFixed(2)}`;
};
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.imagen}/>
            <Text style={styles.nombre}>{name}</Text>
            <Text style={styles.categ}>{categoria}</Text>
            {venta &&(
                <View>
                    <CustomButton title={"Agregar al carrito"} onPressButton={()=> {}} variant="tertiary" />
                    <Text style={styles.precio} >{formatearPrecio(precio)} </Text>
                </View>
                
            )}
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
    },
    precio: {
        fontFamily: 'CormorantGaramond_400Regular',
        fontSize: 15,
        color: '#b7b4ae',
        textAlign: 'center'
    }
});