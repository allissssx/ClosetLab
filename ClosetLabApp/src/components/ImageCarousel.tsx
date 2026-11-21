import { useState } from "react";
import { View, Image, StyleSheet, ImageSourcePropType, Dimensions } from "react-native";

type ImageCarouselProps = {
    images: ImageSourcePropType[];
};

const width  = Dimensions.get("window");

export default function ImageCarousel({images}: ImageCarouselProps){

    const [currentIndex, setCurrentIndex] = useState(0);
    
    return(
        <View >
            
        </View>
    );
}

const styles = StyleSheet.create({
    
});