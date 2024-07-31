import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/mallSlice';
import Header from '../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import ProductConponent from '../components/ProductConponent';

const OderScreen = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.items);
    const status = useSelector((state) => state.items.status);
    const error = useSelector((state) => state.items.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchItems());
        }
    }, [dispatch, status]);

    // split items 
    const Coffee = items.slice(0, 4);
    const Non_coffee = items.slice(4, 8);
    const Snack = items.slice(8, 12);

    const renderItem = ({ item }) => (
        <ProductConponent item={item} />
    );

    if (status === 'loading') {
        return (
            <View style={styles.container}>
                <Header />
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (status === 'failed') {
        return (
            <View style={styles.container}>
                <Header />
                <Text style={styles.errorText}>Failed to load items: {error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.headerContainer}>
                <View style={styles.mapContainer}>
                    <Feather name="map-pin" size={23} color="black" />
                    <Text style={styles.textStore}>Mall Of Indonesia</Text>
                </View>
            </View>

            <FlatList
                ListFooterComponent={
                    <View style={styles.section}>
                        <Text style={styles.textCategory}>Coffee</Text>
                        <FlatList
                            data={Coffee}
                            renderItem={renderItem}
                            numColumns={2}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={styles.list}
                            ListFooterComponent={
                                <View>
                                    <View style={styles.section}>
                                        <Text style={styles.textCategory}>Non-coffee</Text>
                                        <FlatList
                                            data={Non_coffee}
                                            renderItem={renderItem}
                                            numColumns={2}
                                            keyExtractor={(item) => item.id.toString()}
                                            contentContainerStyle={styles.list}
                                            ListFooterComponent={
                                                <View>
                                                    <View style={styles.section}>
                                                        <Text style={styles.textCategory}>Snack</Text>
                                                        <FlatList
                                                            data={Snack}
                                                            renderItem={renderItem}
                                                            numColumns={2}
                                                            keyExtractor={(item) => item.id.toString()}
                                                            contentContainerStyle={styles.list}
                                                        />
                                                    </View>
                                                </View>
                                            }
                                        />
                                    </View>

                                </View>
                            }
                        />
                    </View>
                }

            />

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        padding: 10,
    },
    mapContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStore: {
        fontSize: 24,
        color: 'black',
        marginLeft: 8,
        fontWeight: '700',
    },
    textCategory: {
        fontSize: 24,
        color: 'black',
        marginLeft: 10,
        fontWeight: '500',
        marginVertical: 12,
    },
    section: {
        marginVertical: 10,
    },
    list: {
        paddingHorizontal: 10,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default OderScreen;
