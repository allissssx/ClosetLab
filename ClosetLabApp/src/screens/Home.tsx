import { View,Text, StyleSheet, ScrollView } from "react-native"
import ClothingCard from "../components/ClothingCard"
import ImageCarousel from "../components/ImageCarousel";
import Sectiontitle from "../components/SectionTitle";
import CustomButton from "../components/CustomButton";

const myImages = [
  require("../../assets/camisa1.jpg"),
];
export default function Home(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.container2}>
                <Sectiontitle text={"ClosetLab"} tipo={"Titulo"} />
                <Sectiontitle text={" Descubre nuevas combinaciones con lo que ya tienes"} tipo={"Subtitulo"} />
                <View style={styles.carousel}>
                    <ImageCarousel images={myImages} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 60,
        backgroundColor: '#0a0a0a',
    },
    container2:{
        alignItems: "center"
    },

    carousel:{
        padding: 40,
        alignItems: 'center'
    },

    }
});