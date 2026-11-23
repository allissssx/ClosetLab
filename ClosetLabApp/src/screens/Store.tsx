import { View,Text, StyleSheet, ImageBackground, ScrollView, FlatList } from "react-native"
import ClothingCard from "../components/ClothingCard";
import Sectiontitle from "../components/SectionTitle";
import { clothes } from "../utils/prendas";
import CustomButton from "../components/CustomButton";

const prendaVenta = clothes.filter(
    (item) =>
      item.venta === true
  );

export default function Store(){
    return(
        <ImageBackground
                      source={require('../../assets/fondo3.jpg')}
                            style={styles.background}
                      resizeMode="cover"
                    >

        <FlatList
            data={prendaVenta}
            numColumns={2}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}
            columnWrapperStyle={styles.row}
            ListHeaderComponent={
                <View style={styles.header}>
                    <Sectiontitle text={"Tienda"} tipo={"Titulo"} />
                    <Sectiontitle text={"Compra, vende o intercambia prendas que ya no utilices"} tipo={"Subtitulo"} />
                    <View style={styles.categorias} >
                        <CustomButton title={"Todo"} onPressButton={() => {}} variant="tertiary" />
                        <CustomButton title={"Camisas"} onPressButton={() => {}} variant="tertiary" />
                        <CustomButton title={"Pantalones"} onPressButton={() => {}} variant="tertiary" />
                        <CustomButton title={"Vestidos"} onPressButton={() => {}} variant="tertiary" />
                        <CustomButton title={"Calzado"} onPressButton={() => {}} variant="tertiary" />
                    </View>
                </View>
            }
            renderItem={({ item }) => (
                <ClothingCard
                    name={item.name}
                    categoria={item.category}
                    image={item.image}
                    venta={item.venta}
                    precio={item.precio}
                />
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
        paddingVertical: 60,
    },

    header: {
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
    }
});