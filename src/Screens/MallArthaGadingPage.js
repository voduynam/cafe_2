import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/mallSlice';
import Header from '../components/Header';
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
