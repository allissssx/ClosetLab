import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Closet from '../screens/Closet';
import Outfit from '../screens/Outfit';
import Store from '../screens/Store';
import { Ionicons } from '@expo/vector-icons';
import { TabsParamList } from '../utils/types/NavigationTypes';



const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabNavigator({ route }: any) {
    const { email } = route.params;
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#792427',
            tabBarInactiveTintColor: '#726e68',
            tabBarStyle: {
            backgroundColor: 'black',
            borderTopColor: 'black',
            height: 70,
            paddingTop: 10
            },
        }}
    >

        <Tab.Screen name="HomeScreen" component={Home} 
            options={{ title: "Inicio",
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={size}
                    color={color}
                    />
                ),
            }}/>

        <Tab.Screen name="ClosetScreen" component={Closet} 
            options={{ title: "Mi Closet",
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                    name={focused ? "shirt" : "shirt-outline"}
                    size={size}
                    color={color}
                    />
                ),
            }}/>

        <Tab.Screen name="OutfitScreen" component={Outfit}
            options={{ title: "Crear",
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                    name={focused ? "sparkles" : "sparkles-outline"}
                    size={size}
                    color={color}
                    />
                ),
            }}/>
        
        <Tab.Screen name="StoreScreen" component={Store}
            options={{ title: "Tienda",
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                    name={focused ? "storefront" : "storefront-outline"}
                    size={size}
                    color={color}
                    />
                ),
            }}/>

        <Tab.Screen name="ProfileScreen" component={Profile} initialParams={{ email: email }}
            options={{ title: "Mi Perfil",
                tabBarIcon: ({ color, size, focused }) => (
                    <Ionicons
                    name={focused ? "person" : "person-outline"}
                    size={size}
                    color={color}
                    />
                ),
            }}/>
            
    </Tab.Navigator>
  );
}