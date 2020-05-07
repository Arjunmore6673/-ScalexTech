import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addData, deleteSingle} from "../action/actions";
import AlertCommon from "../components/AlertCommon";


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
            onSearchButtonClick()
        } else
            setIsSearching(false)
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
            AlertCommon("something went wrong", error)
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
                    <View style={styles.bookDetails}>
                        <Text style={styles.title}>{book.title}</Text>
                        <Text style={styles.subTitle}>{book.subtitle}</Text>
                        <Text style={styles.subTitle}>{book.price}</Text>
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
            <View style={styles.container}>
                <TextInput
                    value={searchString}
                    style={styles.searchInput} placeholder="Book title"
                    onChangeText={(value) => {
                        setSearchString(value);
                    }}>
                </TextInput>
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
    bookDetails: {
        flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end'
    },
    title: {
        color: 'white', fontSize: 20, marginHorizontal: 6
    },
    container: {
        flex: 1, backgroundColor: '#f1f1f1', padding: 10
    },
    imageStyle: {
        height: "100%",
        width: '100%',
        padding: 0,
        margin: 0,
        position: 'absolute'
    },
    subTitle: {
        color: 'white', margin: 6
    },
    searchInput: {
        marginHorizontal: 10,
        paddingBottom: 2,
        height: 38,
        padding: 10,
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
