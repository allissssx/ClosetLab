import { useState } from "react";
import { View,Text, Alert, ImageBackground, FlatList, ScrollView, Image, Pressable, StyleSheet } from "react-native"
import { clothes } from "../utils/prendas";
import Sectiontitle from "../components/SectionTitle";
import CustomButton from "../components/CustomButton";


export default function Outfit(){

    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const selectedClothes = clothes.filter(item =>
        selectedIds.includes(item.id)
    );

    const toggleClothing = (id: string) => {
        setSelectedIds(previous =>
        previous.includes(id)
            ? previous.filter(itemId => itemId !== id)
            : [...previous, id]
        );
    };

    const handleSave = () => {
        if (selectedIds.length === 0) {
        Alert.alert("Nada seleccionado", "Seleccionar al menos una prenda");
        return;
        }

        Alert.alert("Accion realizada", "El conjunto está listo");
    };

    return(
        <ImageBackground
        source={require("../../assets/fondo3.jpg")}
        style={styles.background}
        resizeMode="cover"
        >
        <FlatList
            data={clothes}
            numColumns={2}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.container}
            columnWrapperStyle={styles.row}
            ListHeaderComponent={
            <View>
                <Sectiontitle text="Crear conjunto" tipo="Titulo" />
                <View style={styles.preview}>
                <Text style={styles.previewtitulo}>Vista previa</Text>

                <ScrollView horizontal >
                    {selectedClothes.length === 0 
                    ? (<Text style={styles.previewtext}>Selecciona prendas para comenzar</Text>) 
                    : (selectedClothes.map(item => (
                        <View key={item.id} style={styles.prendapreview}>
                        <Image source={item.image} style={styles.imagenpreview}/>
                        <Text style={styles.text} >{item.name}</Text>
                        </View>
                    )))}
                </ScrollView>
                </View>
                <Sectiontitle text="Mis prendas" tipo="Subtitulo" />
            </View>
            }

            renderItem={({ item }) => {
            const isSelected = selectedIds.includes(item.id);

            return (
                <Pressable
                style={[styles.card, isSelected && styles.selectedcard]}
                onPress={() => toggleClothing(item.id)}>
                <Image source={item.image} style={styles.imagen}/>
                <Text style={styles.cardname}> {item.name}</Text>

                <Text style={styles.text}>
                    {isSelected ? "Seleccionada" : "+ Agregar"}
                </Text>
                </Pressable>
            );
            }}

            ListFooterComponent={
                <View style={styles.buttoncontainer}>
                    <CustomButton title="Guardar conjunto" onPressButton={handleSave} variant="secondary"/>
                </View>
            }
        />
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    container: {
        padding: 20,
        paddingTop: 60,
    },

    preview: {
        backgroundColor: "#33312f",
        padding: 15,
        borderRadius: 15,
        marginVertical: 18,
        minHeight: 150,
    },

    previewtitulo: {
        fontFamily: 'CormorantGaramond_600SemiBold',
        fontSize: 18,
        color: '#b7b4ae',
        marginBottom: 12,
    },

    previewtext: {
        color: "gray",
        marginVertical: 20,
        fontFamily: 'CormorantGaramond_400Regular',
    },

    prendapreview: {
        alignItems: "center",
        marginRight: 12,
    },

    imagenpreview: {
        width: 85,
        height: 100,
        borderRadius: 10,
        resizeMode: "cover",
    },

    row: {
        justifyContent: "space-between",
        marginBottom: 15,
    },

    card: {
        width: "48%",
        backgroundColor: "#0a0a0a",
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#33312f",
    },

    selectedcard: {
        borderColor: "#b7b4ae",
    },

    imagen: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        resizeMode: "cover",
    },

    cardname: {
        marginTop: 8,
        fontFamily: 'CormorantGaramond_600SemiBold',
        fontSize: 18,
        color: '#7c2c30',
        textAlign: 'center'
    },

    text: {
        fontFamily: 'CormorantGaramond_600SemiBold',
        marginTop: 5,
        color: "#726e68",
        fontSize: 15,
        textAlign: 'center'
    },
    
    buttoncontainer:{
        alignItems: 'center'
    }
});