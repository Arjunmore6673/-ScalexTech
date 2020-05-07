import React, {useEffect} from "react";
import {Image, StyleSheet, Text, View} from 'react-native';

export const ShowBook = (data) => {

    const book = data.route.params.data;

    useEffect(() => {
    }, []);

    return <View style={{flex: 1}}>
        <View style={styles.card}>
            <Image
                resizeMode={'cover'}
                style={styles.imageStyle}
                source={{uri: book.image}}
            />
        </View>
        <View style={styles.details}>
            <View style={styles.titlePrice}>
                <Text style={styles.textStyle}>{book.title} </Text>
                <Text style={styles.textStyle3}>{book.price} </Text>
            </View>
            <View style={styles.lineStyle}/>
            <Text style={styles.subtitle}>{book.subtitle} </Text>

        </View>
    </View>
}
const styles = StyleSheet.create({

    titlePrice: {
        paddingVertical:15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    details: {
        marginTop: 10, padding: 10, backgroundColor: '#f2f2f2'
    },
    textStyle: {
        flex: 9,
        fontSize: 20,
        fontWeight: 'bold',
        color: "purple"
    },
    textStyle3: {
        flex: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: "blue"
    },
    subtitle: {
        paddingVertical:15,
        fontSize: 20,
        color: "purple"
    },
    lineStyle: {
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
        width: "100%",
    }
});
