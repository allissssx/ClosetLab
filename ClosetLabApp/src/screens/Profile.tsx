import { View, Text, ImageBackground, StyleSheet, ScrollView, Image} from "react-native";
import Sectiontitle from "../components/SectionTitle";
import CustomButton from "../components/CustomButton";

export default function Profile({ route }: any) {
    const { email } = route.params;

    return (
        
        <ImageBackground
            source={require('../../assets/fondo3.jpg')}
            style={styles.background}
            resizeMode="cover">
                
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Sectiontitle text={"Mi perfil"} tipo={"Titulo"}  />
                    <Image source={require('../../assets/perfil.jpg')} style={styles.imagen}/>
                    <CustomButton title={"Editar perfil"} onPressButton={()=>{}} variant="tertiary"/>
                </View>

                <View style={styles.caja}>
                    <Text style={styles.texto}>Nombre de usuario: </Text>
                    <Text style={styles.texto}>Correo: {email}</Text>
                </View>

                <CustomButton title={"Cambiar contraseña"} onPressButton={()=>{}} variant="tertiary"/>
                
            </ScrollView>

             <View style={styles.boton}>
                    <CustomButton title={"Cerrar Sesión"} onPressButton={()=>{}} variant="primary"/>
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

    container:{
        paddingHorizontal: 20,
        paddingVertical: 60,
        flex: 1
    },

    imagen:{
        width: 150,
        height: 150,
        borderRadius: 75,
        resizeMode: "cover",
        marginTop: 40
    },

    header:{
        alignItems: 'center'
    },

    texto:{
        color: '#b7b4ae',
        fontFamily: "CormorantGaramond_600SemiBold",
        fontSize: 17,
        paddingBottom: 5
    },

    caja:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#33312f',
        borderRadius: 10,
        marginTop: 40,
        marginBottom: 20
    },
    
    boton:{
        alignItems: 'center',
        marginTop: 'auto',
        padding: 30
    }

});