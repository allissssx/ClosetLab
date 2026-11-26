import { useState } from "react";
import { View,Text, Alert, ImageBackground, FlatList, ScrollView, Image, Pressable, StyleSheet } from "react-native"
import { clothes } from "../../utils/prendas";
import Sectiontitle from "../../components/SectionTitle";
import CustomButton from "../../components/CustomButton";
import { RootStackScreenProps } from "../../utils/types/NavigationTypes";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";

type Props = RootStackScreenProps<"AddClothingScreen">;

export default function AddClothing(){
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [talla, setTalla] = useState("");
    const [estado, setEstado] = useState("");

     const handleSave = () => {
        if (nombre.trim() === "" && categoria.trim() === ""
            && talla.trim() === "") {
            Alert.alert(
                "Campos obligatorios",
                "Por favor, ingrese los datos requeridos"
            );
            return;
        }

        if (nombre.trim() === "") {
            Alert.alert(
                "Nombre requerido",
                "Por favor, ingresa el nombre con el que quieras identificar tu prenda."
            );
            return;
        }

        if (categoria.trim() === "") {
            Alert.alert(
                "Categoria requerida",
                "Por favor, ingresa la categoria a la que pertenece tu prenda."
            );
            return;
        }

        if (talla.trim() === "") {
            Alert.alert(
                "Talla requerida",
                "Por favor, ingresa la talla de tu prenda."
            );
            return;
        }

        Alert.alert("Accion realizada", "La prenda se ha agregado");
    };

    return(
        <ImageBackground
        source={require("../../../assets/fondo3.jpg")}
        style={styles.background}
        resizeMode="cover">
        
        <View style={styles.container}>
            <View style={styles.agregarimg}>
                <Ionicons name={"add-circle"} size={30} color={'#651d20'} style={styles.icono} />
                <Text style={styles.texto}>Agrega la imagen de tu prenda</Text>
            </View>
            <View>
                <CustomInput onChangeText={setNombre}
                value={nombre}
                placeholder='Nombre de la prenda'
                obligatorio= {true}/>

            <CustomInput onChangeText={setCategoria}
                value={categoria}
                placeholder='Categoria de la prenda'
                obligatorio= {true}/>
            
            <View style={styles.inputcontainer}>
                <CustomInput onChangeText={setPrecio}
                    type="number"
                    value={precio}
                    placeholder='Precio (L.)'
                    obligatorio= {false}/>

                <CustomInput onChangeText={setTalla}
                    value={talla}
                    placeholder='Talla'
                    obligatorio= {true}/>

            </View>
            
            <CustomInput onChangeText={setEstado}
                value={estado}
                placeholder='Estado de la prenda'
                obligatorio= {false}/>

            </View>

            <CustomButton title="Guardar prenda" onPressButton={handleSave} variant="secondary"/>

        </View>

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
        alignItems: 'center',
    },

    agregarimg:{
        borderWidth: 3,
        borderColor: '#651d20',
        borderRadius: 8,
        width: "80%",
        height: 300,
        padding: 20,
        marginVertical: 30
    },
    inputcontainer:{
        width: '50%',
        flexDirection: 'row',
    },

    texto:{
        fontFamily: 'CormorantGaramond_600SemiBold',
        fontSize: 18,
        color: '#b7b4ae',
        textAlign: 'center',
        marginTop: 'auto'
    },
    icono:{
        alignSelf: 'center',
        marginTop: '45%'
    }

});