import { View, Image, Text, StyleSheet } from "react-native";

type cardProps= {
    name: string;
    categoria: string;
    image: any;
}

export default function ClothingCard({name, categoria, image}: cardProps){

    return(
        <View>
            <Image source={image}/>
            <Text>{name}</Text>
            <Text>{categoria}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
    }
});