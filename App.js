import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import {First} from "./screens/First";
import {Second} from "./screens/Second";
import AppRoutes from "./navigation/Routes";

const Stack = createStackNavigator();

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        loadResourcesAndDataAsync();

        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                <AppRoutes/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
