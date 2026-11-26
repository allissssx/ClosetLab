import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ClothingDetail from '../screens/features/ClothingDetail';
import { RootStackParamList } from '../utils/types/NavigationTypes';
import TabNavigator from './TabNavigator';
import AddClothing from '../screens/features/AddClothing';



const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator(){

    return(
        <Stack.Navigator
            initialRouteName='LoginScreen'
        >
            <Stack.Screen 
                name="LoginScreen"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={Register}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="TabScreen"
                component={TabNavigator}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="ClothingDetailScreen"
                component={ClothingDetail}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="AddClothingScreen"
                component={AddClothing}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}