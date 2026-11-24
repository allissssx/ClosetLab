import { View,Text, StyleSheet, ImageBackground, ScrollView, FlatList } from "react-native"
import ClothingCard from "../components/ClothingCard";
import Sectiontitle from "../components/SectionTitle";
import { clothes } from "../utils/prendas";
import CustomButton from "../components/CustomButton";


export default function Closet(){
    return(
        <ImageBackground
            source={require('../../assets/fondo3.jpg')}
            style={styles.background}
            resizeMode="cover">
                 <View style={styles.header}>
                    <Sectiontitle text={"Mis Prendas"} tipo={"Titulo"} />
                    <CustomButton title={"Agregar nueva prenda"} onPressButton={() => {}} variant="secondary" />
                    <View style={styles.categorias} >
                        <CustomButton title={"Todo"} onPressButton={() => {}} variant="tertiary" />
                        <CustomButton title={"Camisas"} onPressButton={() => {}} variant="tertiary" />
                        <CustomButton title={"Pantalones"} onPressButton={() => {}} variant="tertiary" />
                        <CustomButton title={"Vestidos"} onPressButton={() => {}} variant="tertiary" />
                        <CustomButton title={"Calzado"} onPressButton={() => {}} variant="tertiary" />
                    </View>
                </View>
        <FlatList
            data={clothes}
            numColumns={2}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}
            columnWrapperStyle={styles.row}
            
            renderItem={({ item }) => (
                <ClothingCard
                    name={item.name}
                    categoria={item.category}
                    image={item.image}
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
    }
});