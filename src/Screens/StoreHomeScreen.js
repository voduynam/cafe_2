import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import data from '../data/mall.json'; 
import { useDispatch } from 'react-redux';
import  {selectMall,clearMall} from "../redux/handleChooseMall"
 
const StoreHomeScreen = ({navigation}) => {
    const dispatch=useDispatch();

    const handleMallSelectionScreen =(mall)=>{
        dispatch(selectMall(mall));
        navigation.navigate(mall.replace(/\s+/g, ''));

    }


    const renderItem = ({ item }) => (


        <TouchableOpacity style={styles.itemContainer}
            onPress={()=>{
                handleMallSelectionScreen(item.name)


            }}

        >
            <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemOpenHours}>{item.openHours}</Text>
                <Text style={styles.itemAddress}>{item.address}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.searchContainer}>
                <View style={styles.searchInput}>
                    <AntDesign name={"search1"} size={30} color={"black"} />
                    <TextInput
                        placeholder='Search'
                        style={styles.textInput}
                    />
                </View>
                <Entypo name={"map"} size={37} color={"black"} />
            </View>
            <View style={{ height: 3, backgroundColor: 'black' }} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
          
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    searchInput: {
        flexDirection: "row",
        width: 340,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 11,
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: "#737373",
        paddingHorizontal: 10,
        flex: 1,
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
    },
  
    itemContainer: {
      
        alignItems: 'center',
        marginVertical: 10,
      
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    itemImage: {
        width: 400,
        height: 300,
  
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemOpenHours: {
        fontSize: 14,
        color: '#555',
    },
    itemAddress: {
        fontSize: 12,
        color: '#777',
    },
});

export default StoreHomeScreen;
