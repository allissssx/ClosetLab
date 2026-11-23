import { View,Text, StyleSheet, ScrollView, ImageBackground } from "react-native"
import ClothingCard from "../components/ClothingCard"
import ImageCarousel from "../components/ImageCarousel";
import Sectiontitle from "../components/SectionTitle";
import CustomButton from "../components/CustomButton";
import { clothes } from "../utils/prendas";


export default function Home({navigation} : any){

    const handleOnPressCloset = () => {
        navigation.navigate("ClosetScreen")
    }
    const handleOnPressOutfit = () => {
        navigation.navigate("OutfitScreen")
    }
    const handleOnPressStore = () => {
        navigation.navigate("StoreScreen")
    }
    return(
        <ImageBackground
              source={require('../../assets/fondo3.jpg')}
                    style={styles.background}
              resizeMode="cover"
            >
        <ScrollView style={styles.container}>
            <View style={styles.titles}>
                <Sectiontitle text={"ClosetLab"} tipo={"Titulo"} />
                <Sectiontitle text={" Descubre nuevas combinaciones con lo que ya tienes"} tipo={"Subtitulo"} />
            </View>
            <View style={styles.carousel}>
                <ImageCarousel images={clothes.map((item) => item.image)}/>
                <CustomButton title={"Ver todas mis prendas"} onPressButton={handleOnPressCloset} variant="primary" />
                <CustomButton title={"Crear conjunto"} onPressButton={handleOnPressOutfit} variant="secondary" />
            </View>

            <View style={styles.tienda}>
                <Text style={styles.texto}>Comparte prendas que ya no utilizas con otros usuarios o para intercambio o venta</Text>
                <CustomButton title={"Ir a la tienda"} onPressButton={handleOnPressStore} variant="primary" />
            </View>
           
            
        </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
    container:{
        paddingHorizontal: 20,
        paddingVertical: 60,
        
    },
    titles:{
        alignItems: "center",
        paddingBottom: 20
    },

    carousel:{
        padding: 40,
        alignItems: 'center',
        marginBottom: 40,
        borderWidth: 1,
        borderColor: '#b7b4ae',
        borderRadius: 10
    },
    texto:{
        color: '#b7b4ae',
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 5
    },
    tienda:{
        padding: 25,
        alignItems: 'center',
        marginBottom: 80,
        borderWidth: 1,
        borderColor: '#b7b4ae',
        borderRadius: 10
    }
});