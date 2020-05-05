import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("First");
            }}>
                <Text style={{fontSize: 50}}>Hello</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },

});
