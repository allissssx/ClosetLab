import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList ={
    LoginScreen: undefined;
    RegisterScreen: undefined; 
    TabScreen: NavigatorScreenParams<TabsParamList>;
    ClothingDetailScreen: undefined;
}

export type TabsParamList ={
    HomeScreen: undefined;
    ClosetScreen: undefined; 
    OutfitScreen: undefined;
    StoreScreen: undefined;
    ProfileScreen: {email: string};
}

export type MainTabsScreenProps<T extends keyof TabsParamList> = CompositeScreenProps<
    NativeStackScreenProps <RootStackParamList>,
    BottomTabScreenProps<TabsParamList, T>
>;