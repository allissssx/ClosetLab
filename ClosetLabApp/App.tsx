import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { useFonts } from "expo-font";

import {
  PirataOne_400Regular,
} from "@expo-google-fonts/pirata-one";

import {
  CormorantGaramond_400Regular,
  CormorantGaramond_600SemiBold,
} from "@expo-google-fonts/cormorant-garamond";

export default function App() {
    const [fontsLoaded] = useFonts({
    PirataOne_400Regular,
    CormorantGaramond_400Regular,
    CormorantGaramond_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
  
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
}