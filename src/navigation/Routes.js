import {ShowBook} from "../screens/ShowBook";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: 'E-BOOK'}}/>
                <Stack.Screen name="ShowBook" component={ShowBook}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
