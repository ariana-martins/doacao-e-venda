import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import HomeScreen from "../pages/HomeScreen";
import ScreenNavigator from "../components/Header/ScreenNavigator";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='ScreenNavigator'
                component={ScreenNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}