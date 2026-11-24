import { View,Text, Image, StyleSheet, ImageBackground } from "react-native"
import { MainTabsScreenProps, RootStackParamList, RootStackScreenProps } from "../../utils/types/NavigationTypes";
import { clothes } from "../../utils/prendas";

type Props = RootStackScreenProps<"ClothingDetailScreen">;


export default function ClothingDetail({ route }: Props){

    const { id } = route.params;
    const prenda = clothes.find(item => item.id === id);

    if (!prenda) {
        return (
            <View>
                <Text>No se encontró la prenda</Text>
            </View>
        );
    }

    return (
        <ImageBackground
            source={require('../../../assets/fondo2.jpg')}
            style={styles.background}
            resizeMode="cover">
        <View style={styles.imagecontainer}>
            <Image source={prenda.image} style={styles.image} />
        </View>
        <View style={styles.textcontainer}>
            <Text style={styles.texto}>{prenda.name}</Text>
            <Text style={styles.texto}>Categoria: {prenda.category}</Text>
            <Text style={styles.texto}>Precio: L {prenda.precio ?? ""}</Text>
            <Text style={styles.texto}>Talla: {prenda.talla}</Text>
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
    imagecontainer: {
        alignItems: 'center',
        padding: 20,
        marginTop: 80,
    },
    image: {
        borderRadius: 8,
        width: "80%",
        height: 300,
        resizeMode: "cover",
    },
    texto:{
        fontFamily: 'CormorantGaramond_400Regular',
        fontSize: 20,
        color: '#b7b4ae',
        textAlign: 'center'
    },
    textcontainer:{
        paddingHorizontal: 20,

    }
});