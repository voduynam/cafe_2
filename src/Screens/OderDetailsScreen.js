import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; 
const OrderDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedAvailable, setSelectedAvailable] = useState("yes");
  const dispatch = useDispatch(); 

  const sizes = [
    { size: 'S', label: 'Small' },
    { size: 'M', label: 'Medium' },
    { size: 'L', label: 'Big' },
  ];

  const status = [
    { hot: "yes", label: 'Hot' },
    { hot: 'no', label: 'Cold' }
  ];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAvailableSelect = (hot) => {
    setSelectedAvailable(hot);
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...item,
      size: selectedSize,
      hot: selectedAvailable,
      quantity: 1,
      totalPrice: item.price,
    };
    dispatch(addToCart(cartItem)); 
    navigation.navigate('CARTSCREEN');
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={
          <View>
            <View style={styles.infoContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.HR} />
            </View>
            <View style={styles.bodyContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.textTitleBig}>Choose Size</Text>
                <Text style={styles.textTitleSmall}>pick 1</Text>
              </View>
              <View style={styles.sizeContainer}>
                <View>
                  {sizes.map((sizeItem) => (
                    <TouchableOpacity
                      key={sizeItem.size}
                      onPress={() => handleSizeSelect(sizeItem.size)}
                      style={styles.sizeChoose}
                    >
                      <FontAwesome
                        name={selectedSize === sizeItem.size ? "circle" : "circle-o"}
                        size={20}
                        color="black"
                        style={styles.icon}
                      />
                      <Text style={styles.sizeLabel}>{sizeItem.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View>
                  <Text style={styles.TextPrice}>+0</Text>
                  <View style={styles.HR2} />
                  <Text style={styles.TextPrice}>+2</Text>
                  <View style={styles.HR2} />
                  <Text style={styles.TextPrice}>+5</Text>
                </View>
              </View>
            </View>
            <View style={styles.bodyContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.textTitleBig}>Available</Text>
                <Text style={styles.textTitleSmall}>pick 1</Text>
              </View>
              <View style={styles.sizeContainer}>
                <View>
                  {status.map((hotItem) => (
                    <TouchableOpacity
                      key={hotItem.hot}
                      onPress={() => handleAvailableSelect(hotItem.hot)}
                      style={styles.sizeChoose}
                    >
                      <FontAwesome
                        name={selectedAvailable === hotItem.hot ? "circle" : "circle-o"}
                        size={20}
                        color="black"
                        style={styles.icon}
                      />
                      <Text style={styles.sizeLabel}>{hotItem.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View>
                  <Text style={styles.TextPrice}>+0</Text>
                  <View style={styles.HR2} />
                  <Text style={styles.TextPrice}>+0</Text>
                  <View style={styles.HR2} />
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={handleAddToCart}>
              <Text style={styles.buttonAdd}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 24,
    color: '#272727',
    marginLeft: 20,
    color: "black",
  },
  description: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 18,
    color: '#272727',
    marginLeft: 20,
  },
  HR: {
    height: 1.5,
    backgroundColor: "black",
    marginTop: 20,
    width: 380,
    alignSelf: "center"
  },
  sizeContainer: {
    flexDirection: "row",
    alignContent: "center"
  },
  infoContainer: {
    backgroundColor: "#e6e6e6",
    paddingVertical: 30,
  },
  bodyContainer: {
    backgroundColor: "#e6e6e6",
    paddingVertical: 10,
    marginVertical: 25,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  textTitleBig: {
    fontSize: 22,
    color: "black",
    marginLeft: 20,
    fontWeight: "500",
  },
  textTitleSmall: {
    marginLeft: 10,
    color: "black",
    fontWeight: "400",
    fontSize: 17,
  },
  sizeChoose: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
  },
  sizeLabel: {
    marginLeft: 20,
    fontSize: 19
  },
  TextPrice: {
    marginVertical: 10,
    fontSize: 19,
    marginLeft: 200
  },
  HR2: {
    height: 1,
    backgroundColor: "black",
    width: 220,
    alignSelf: "flex-end"
  },
  buttonAdd: {
    padding: 10,
    backgroundColor: "green",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 18,
    fontSize: 30,
    color: "white",
    width: "95%",
    alignSelf: "center"
  }
});

export default OrderDetailsScreen;
