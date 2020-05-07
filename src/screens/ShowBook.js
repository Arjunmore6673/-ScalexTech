import React, {useEffect} from "react";
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;
export const ShowBook = (data) => {

    const book = data.route.params.data;

    useEffect(() => {
    }, []);

    return <View style={{flex: 1}}>
        <View style={styles.card}>
            <Image
                style={styles.imageStyle}
                source={{uri: book.image}}
            />
        </View>
        <View style={styles.details}>
            <Text style={styles.textStyle}>{book.title} </Text>
            <View style={styles.lineStyle}/>
            <Text style={styles.textStyle2}>{book.subtitle} </Text>
            <Text style={styles.textStyle2}>{book.price} </Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "purple"
    },
    details: {
        marginTop: 10, padding: 10, backgroundColor: '#f2f2f2'
    },
    textStyle2: {
        fontSize: 20,
        color: "purple"
    }, lineStyle: {
        borderStyle: 'dashed',
        borderWidth: 0.8,
        borderRadius: 0.1,
        borderColor: '#D3D3D3',
    },
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: "#fff",
        elevation: 10
    },
    imageStyle: {
        height: 200,
        width: imageWidth,
    }
});
