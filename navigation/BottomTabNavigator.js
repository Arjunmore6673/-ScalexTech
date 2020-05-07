import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import {Second} from "../screens/Second";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({navigation, route}) {

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-home"/>,
                }}
            />
            <BottomTab.Screen
                name="Links"
                component={LinksScreen}
                options={{
                    title: 'People',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-people"/>,
                }}
            />
            <BottomTab.Screen
                name="Arjun"
                component={Second}
                options={{
                    title: 'People',
                    tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="md-people"/>,
                }}
            />
        </BottomTab.Navigator>
    );
}


