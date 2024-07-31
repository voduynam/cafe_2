import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductConponent = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('PRODUCTS_DETAIL', { item })}>
        <Image source={{ uri: item.image }} style={styles.image} />
       
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
   
  },
  image: {
    width: 178,
    height: 150,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    color: '#272727',
    marginTop: 2,
    marginBottom: 2,
    textAlign: 'center',
  },
  price: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 10,
    color: '#272727',
    marginTop: 2,
    marginBottom: 2,
    textAlign: 'center',
  },
});

export default ProductConponent;
