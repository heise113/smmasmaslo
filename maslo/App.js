import * as Font from 'expo-font';
import React, {useState} from "react";
import Auth from "./screens/auth/Auth";
import Main from "./screens/main/Main";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppLoading from "expo-app-loading";
import './constants/translations/IMLocalize';

const Stack = createNativeStackNavigator();

export default function App() {
    const fonts = () => Font.loadAsync({
        'g-bold': require('./assets/fonts/Gilroy-Bold.ttf'),
        'g-regular': require('./assets/fonts/Gilroy-Regular.ttf'),
        'g-semibold': require('./assets/fonts/Gilroy-Semibold.ttf'),
        'r-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    })

    const [font, setFont] = useState(false)
    if (font) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Auth" component={Auth}/>
                    <Stack.Screen name="Main" component={Main}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    else{
        return(
            <AppLoading
                startAsync={fonts}
                onFinish={() => setFont(true)}
                onError={console.warn}
            />
        )
    }
}