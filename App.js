import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import {createStackNavigator} from '@react-navigation/stack';

import AppRoutes from "./src/navigation/Routes";
import {Provider} from "react-redux";
import store from "./src/store/store";

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
            <Provider store={store}>
                <AppRoutes/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
