import {Ionicons} from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';

const LinksScreen = (props) => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("Second");
            }}>
                <Text style={{fontSize: 50}}>Hello 2</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
export default LinksScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});
