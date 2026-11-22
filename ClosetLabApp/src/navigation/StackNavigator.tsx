import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import TabNavigator from './TabNavigator';




const Stack = createNativeStackNavigator();

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
                name="HomeScreen"
                component={TabNavigator}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}