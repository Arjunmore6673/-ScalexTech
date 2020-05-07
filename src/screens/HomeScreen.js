import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addData, deleteSingle} from "../action/actions";


export default function Home(props) {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const dataReducerState = useSelector((state) => state.dataReducer);
    const {data} = dataReducerState;
    const [searchList, setSearchList] = useState([]);

    useEffect(() => {
        getData();
        return () => {
            console.log("This will be logged on unmount");
        }
    }, []);


    useEffect(() => {
        if (searchString.length > 0) {
            setIsSearching(true)
        } else {
            setIsSearching(false)
        }
    }, [searchString]);

    const onSearchButtonClick = () => {
        const result = data.filter(o => {
            let oo = o.title;
            return oo.includes(searchString);
        })
        setSearchList(result);
        console.log(JSON.stringify(result));
    }

    const getData = async () => {
        try {
            let response = await fetch("https://api.itbook.store/1.0/search/mongodb", {
                method: 'GET',
            });
            let res = await response.json();
            const data = res.books;
            dispatch(addData(data));
        } catch (error) {
            console.error("something went wrong " + error);
        }
    };


    const deleteItem = (title) => {
        dispatch(deleteSingle(title))
    }


    const renderItem = (book) => {
        return (

            <TouchableHighlight underlayColor='#f2f2f2' style={{marginVertical: 20}} onPress={() => {
                props.navigation.navigate("ShowBook", {data: book})
            }}>
                <View style={styles.card}>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: book.image}}
                    />
                    <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end'}}>
                        <Text style={{color: 'white', fontSize: 20, margin: 6}}>{book.title}</Text>
                        <Text style={{color: 'white', margin: 6}}>{book.subtitle}</Text>
                        <Text style={{color: 'white', margin: 6}}>{book.price}</Text>
                    </View>
                </View>
            </TouchableHighlight>


        )
    };

    if (isFetching) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
                <ActivityIndicator animating={true}/>
            </View>
        );
    } else {
        return (
            <View style={{flex: 1, backgroundColor: '#f1f1f1', padding: 10}}>
                <View style={styles.form}>
                    <TextInput
                        value={searchString}
                        style={styles.searchInput} placeholder="Book title"
                        onChangeText={(value) => {
                            setSearchString(value);
                        }}>
                    </TextInput>
                </View>
                {
                    data.length > 0 ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={isSearching ? searchList : data}
                            renderItem={({item}) => {
                                return renderItem(item);
                            }}
                            keyExtractor={(item, index) => `flat_${index}`}/> : null

                }
            </View>
        );
    }
};

const styles = StyleSheet.create({

    card: {
        flex: 1,
        height: 200,
        margin: 10,
        flexDirection: 'row',
        backgroundColor: "#fff",
        elevation: 10
    },
    title: {
        fontSize: 16,
        color: '#48BBEC',
        fontWeight: 'bold',
        paddingRight: 3
    },
    imageStyle: {
        height: "100%",
        width: '100%',
        padding: 0,
        margin: 0,
        position: 'absolute'
    },
    subTitle: {
        marginTop: 3,
        fontSize: 14
    },
    searchInput: {
        paddingHorizontal: 10,
        paddingBottom: 2,
        height: 38,
        paddingLeft: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black',
    },
    button: {
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: 'teal',
        borderRadius: 2,
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 17
    }
});
