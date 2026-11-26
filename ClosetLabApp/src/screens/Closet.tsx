import { View,Text, StyleSheet, ImageBackground, ScrollView, FlatList, Pressable } from "react-native"
import ClothingCard from "../components/ClothingCard";
import Sectiontitle from "../components/SectionTitle";
import { clothes } from "../utils/prendas";
import CustomButton from "../components/CustomButton";
import { MainTabsScreenProps } from "../utils/types/NavigationTypes";
import { useState } from "react";
import AddClothing from "./features/AddClothing";

type Props = MainTabsScreenProps<"ClosetScreen">;


export default function Closet({ navigation }: Props){
    const [categoria, setCategoria] = useState("Todo");

    const prendasFiltro = clothes.filter((item) => {
        if (categoria === "Todo") {
            return true;
        }

        return item.category === categoria;
    });

    return(
        <ImageBackground
            source={require('../../assets/fondo3.jpg')}
            style={styles.background}
            resizeMode="cover">
                <View style={styles.header}>
                    <Sectiontitle text={"Mis Prendas"} tipo={"Titulo"} />
                    <CustomButton title={"Agregar nueva prenda"} 
                    onPressButton={() => navigation.navigate("AddClothingScreen")} variant="secondary" />
                    <View style={styles.categorias} >
                        <CustomButton title={"Todo"} onPressButton={() => setCategoria("Todo")} variant="tertiary" />
                        <CustomButton title={"Tops"} onPressButton={() => setCategoria("Top")} variant="tertiary" />
                        <CustomButton title={"Bottoms"} onPressButton={() => setCategoria("Bottom")} variant="tertiary" />
                        <CustomButton title={"Calzado"} onPressButton={() => setCategoria("Calzado")} variant="tertiary" />
                        <CustomButton title={"Vestidos"} onPressButton={() => setCategoria("Vestido")} variant="tertiary" />
                        <CustomButton title={"Accesorios"} onPressButton={() => setCategoria("Accesorio")} variant="tertiary" />   
                    </View>
                </View>
        <FlatList
            data={prendasFiltro}
            numColumns={2}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
                <Pressable style={styles.cardContainer}
                onPress={() => navigation.navigate("ClothingDetailScreen", { id: item.id })}>
                    <ClothingCard
                        name={item.name}
                        categoria={item.category}
                        image={item.image}
                    />
                </Pressable>
            )}
            />
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
        paddingVertical: 15,
    },

    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems:'center'
    },

    row: {
        justifyContent: "space-between",
        marginBottom: 15,
    },

    categorias:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20
    },
    cardContainer: {
        width: "48%",
    },
});