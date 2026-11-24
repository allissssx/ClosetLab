import { View, Text, ImageBackground, StyleSheet, ScrollView, Image} from "react-native";
import Sectiontitle from "../components/SectionTitle";
import CustomButton from "../components/CustomButton";

export default function Profile({ route }: any) {
    const { email } = route.params;

export default function Profile(){
    return(
        <View>
            <Text>Profile </Text>
        </View>
    )
}