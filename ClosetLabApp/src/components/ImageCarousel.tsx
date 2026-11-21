import { useEffect, useRef, useState } from "react";
import { View, Image, StyleSheet, ImageSourcePropType, Dimensions, FlatList } from "react-native";

type ImageCarouselProps = {
    images: ImageSourcePropType[];
};


export default function ImageCarousel({images}: ImageCarouselProps){

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList<ImageSourcePropType>>(null);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;

        flatListRef.current?.scrollToOffset({
            offset: nextIndex * 250,
            animated: true,
        });
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);
    
    return(
        <View style={styles.container}>
            <FlatList ref={flatListRef} data={images} horizontal pagingEnabled showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()} 
            onMomentumScrollEnd={(event) => {
                const index = Math.round(event.nativeEvent.contentOffset.x / 250);
                setCurrentIndex(index);
            }}
            renderItem={({ item }) => (
                <Image source={item} style={styles.image} />
            )}
            />

            <View style={styles.dotsContainer}>
                {images.map((_, index) => (
                    <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot,
                    ]}/>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    width: 250,
    alignItems: "center",
    },

    image: {
        width: 250,
        height: 260,
        resizeMode: "cover",
        borderRadius: 10
    },
    dotsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10,
        gap: 8,
    },

    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#888",
    },

    activeDot: {
        backgroundColor: "#651d20",
        width: 20,
    },
});