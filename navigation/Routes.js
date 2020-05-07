import {First} from "../screens/First";
import {Second} from "../screens/Second";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator}/>
                <Stack.Screen name="First" component={First}/>
                <Stack.Screen name="Second" component={Second} options={{title: 'Overview'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
