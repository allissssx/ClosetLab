import { View,Text, Image, StyleSheet } from "react-native"
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
        <View style={styles.container}>
            <Image source={prenda.image} style={styles.image} />

            <Text>{prenda.name}</Text>
            <Text>{prenda.category}</Text>
            <Text>Precio: L {prenda.precio ?? ""}</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        width: "80%",
        height: 300,
        resizeMode: "cover",
    },
});