import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather"

const Header = ({ isHome }) => {
    const naviagtion = useNavigation();


    const goBack = () => {
        naviagtion.goBack();
    }

    return (
        <View>

            {/* <Text style={styles.textContainer}>Sign out</Text> */}



            {isHome ?

                (
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={goBack}>
                            <Image source={require("../asset/back.png")} style={styles.backContainer} />
                        </TouchableOpacity>
                        <View style={styles.mapContainer}>
                            <Feather name={"map-pin"} size={23} color={"black"} />
                            <Text style={styles.textStore}>Store</Text>
                        </View>
                    </View>

                )
                :


                (

                    <View>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={goBack}>
                                <Image source={require("../asset/back.png")} style={styles.backContainer} />
                            </TouchableOpacity>
                            <Text style={styles.textPickUpto}>Pick up to...</Text>
                        </View>
                        < View style={styles.headerContainer2}>
                            <View style={styles.mapContainer}>
                                <Feather name="map-pin" size={23} color="black" />
                                <Text style={styles.textStore}>Mall artha Gading</Text>
                            </View>
                        </View>
                    </View>

                )
            }
        </View >


    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        marginTop: 1,
        borderRadius: 16
    },
    textContainer: {
        fontSize: 24,
        color: "black",
        marginLeft: 161,
        fontWeight: "600",
        padding: 4

    },
    backContainer: {
        width: 50,
        height: 50,

    },
    mapContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        marginRight: 61
    },
    textStore: {
        fontSize: 24,
        color: "black",
               
    },
    mapContainer2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',

    },
    textPickUpto: {
        marginRight: 190,
        fontSize: 24,
        fontSize: 24,
        color: "black",
        fontWeight: "600"

    },
    headerContainer2: {
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
})

export default Header
