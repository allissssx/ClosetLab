import { View,Text, StyleSheet, ImageBackground, ScrollView, FlatList, Pressable } from "react-native"
import ClothingCard from "../components/ClothingCard";
import Sectiontitle from "../components/SectionTitle";
import { clothes } from "../utils/prendas";
import CustomButton from "../components/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { MainTabsScreenProps } from "../utils/types/NavigationTypes";
import { useState } from "react";

type Props = MainTabsScreenProps<"StoreScreen">;


export default function Store({ navigation }: Props){

    const [categoria, setCategoria] = useState("Todo");

    const prendaVenta = clothes.filter(
        (item) =>
        item.venta === true
    );
    
    const prendasFiltro = prendaVenta.filter((item) => {
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
                <View style={styles.title}>
                    <Sectiontitle text={"Tienda"} tipo={"Titulo"} />
                    <Ionicons name={"cart"} size={30} color={'#651d20'} style={styles.cart} />
                </View>
                    
                <Sectiontitle text={"Compra, vende o intercambia prendas que ya no utilices"} tipo={"Subtitulo"} />
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
                        venta={item.venta}
                        precio={item.precio}
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

    title:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',      
    },

    cart:{
        position: 'absolute',
        right: 0,
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