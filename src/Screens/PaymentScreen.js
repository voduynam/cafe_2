import React, { useState } from 'react'
import { Button, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import AntDesign from "react-native-vector-icons/AntDesign"

const PaymentScreen = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const [isModalVisible, setModalVisible] = useState(false)


  const renderItemOrder = ({ item, index }) => (

    <View style={styles.listOrder} >
      <View style={styles.containertitle} >
        <View style={styles.numberIndexContainer}>
          <Text style={styles.serialNumber}>{index + 1}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.TextPrice}>{item.totalPrice}$</Text>
        </View>
      </View>

      <View style={styles.textDetaills}>
        <Text style={styles.info}>Size: {item.size === "S" ? "Small" : item.size === "M" ? "Medium" : item.size === "L" ? "Big" : ''}</Text>
        <Text style={styles.info}>{item.size === "S" ? "+0" : item.size === "M" ? "+2" : item.size === "L" ? "+5" : ''}</Text>
      </View>

      <View style={styles.textDetaills}>
        <Text style={styles.info}>Status: {item.hot === 'yes' ? 'Hot' : 'Cold'}</Text>
        <Text style={styles.info}>{item.hot === 'yes' ? '+0' : '+0'}</Text>
      </View>
      <View style={styles.textDetaills}>
        <Text style={styles.info}>Quantity:</Text>
        <Text style={styles.info}>{item.quantity}</Text>

      </View>
      <View style={{ height: 1, backgroundColor: "black", marginTop: 5 }} />

    </View>



  )

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.bodyContainer}>
        <Text style={styles.textOrder}>Order Summary</Text>
        <FlatList
          data={cartItems}
          renderItem={renderItemOrder}
          keyExtractor={(item) => `${item.id}-${item.size}-${item.hot}-${item.quantity}-${item.title}`}
          contentContainerStyle={styles.cartList}
          ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
          ListFooterComponent={
            <View>
            <View style={styles.containersubTotal}>
              <Text style={styles.TextSub}>Subtotal:</Text>
              <Text style={styles.TexttotalPrice}>{totalPrice}$</Text>
            </View>
            
            </View>
          }
        />
<View style={styles.contaienrPay}>
        <View>
          <Text style={styles.textPayMentMethod}>Payment Details : </Text>
          <TouchableOpacity style={styles.modalOption} onPress={()=>setModalVisible(true)} >
                <Image source={require("../asset/Ovo.png")} style={styles.imgOvo} />
                <Text style={styles.textPay}>OVO</Text>
               
              </TouchableOpacity>
        </View>
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.headerPaymenMethod}>
                <TouchableOpacity onPress={() => setModalVisible(false)} >
                  <AntDesign name="close"  color="black" size={32} />
                </TouchableOpacity>
                
                <Text style={styles.modalTitle}>Payment Method</Text>
              </View>
              <View style={{height:1, backgroundColor:"black"}}/>
              <TouchableOpacity style={styles.modalOption} >
                <Image source={require("../asset/Ovo.png")} style={styles.imgOvo} />
                <Text style={styles.textPay}>OVO</Text>
               
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:"black"}}/>
              <TouchableOpacity style={styles.modalOption}>
                <Image source={require("../asset/LinkAja.png")} style={styles.imgOvo} />
                <Text style={styles.textPay}>LinkAja</Text>
                
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:"black"}}/>
              <TouchableOpacity style={styles.modalOption} >
                <Image source={require("../asset/Dana.png")} style={styles.imgOvo} />
                <Text style={styles.textPay}>Dana</Text>
          
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:"black"}}/>
              <TouchableOpacity style={styles.modalOption} >
                <Image source={require("../asset/Flip.png")} style={styles.imgOvo} />
                <Text style={styles.textPay}>Flip</Text>
                
              </TouchableOpacity>
              <View style={{height:1, backgroundColor:"black"}}/>
              <TouchableOpacity style={styles.modalOption} >
                <Image source={require("../asset/Cash.png")} style={styles.imgOvo} />
                <Text style={styles.textPay}>Cash</Text>
              </TouchableOpacity>
              

            </View>
          </View>
        </Modal>
      </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textOrder: {
    fontFamily: "Roboto",
    fontWeight: "800",
    fontSize: 24,
    color: "black",
    marginLeft: 20
  },
  bodyContainer: {
    width: "100%",
    backgroundColor: '#DDDDDD',
    marginVertical: 26,
    height:"100%"

  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginHorizontal: 10

  },
  textDetaills: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 52,
    marginHorizontal: 10

  },
  numberIndexContainer: {
    backgroundColor: "#808080",
    marginLeft: 20,
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  containertitle: {
    flexDirection: "row",
    marginVertical: 10,
    flex: 1,
    alignItems: "center"
  },
  listOrder: {
    marginBottom: 10
  },
  serialNumber: {
    color: 'white'
  },
  title: {
    fontSize: 18,
    color: "black"
  },
  TextPrice: {
    fontSize: 18,
    color: "black"
  },
  cartList: {
    paddingHorizontal: 20
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'grey'
  },
  info: {
    fontSize: 14,
  },
  TexttotalPrice: {
    fontSize: 18,
    alignSelf: "flex-end",
    marginRight: 10,
    color: "black"
  },
  containersubTotal: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  TextSub: {
    fontSize: 18,
    color: "black",
    marginLeft: 16,

  },
  textPayMentMethod: {
    fontFamily: "Roboto",
    fontWeight: "800",
    fontSize: 24,
    color: "black",
    marginLeft: 20
  },
  contaienrPay: {
    width: "100%",
    backgroundColor: '#DDDDDD',

  },
  modalContainer: {
 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',


  },
  imgOvo: {
    height: 48,
    width: 48,
    marginHorizontal:3
  },
  textPay:{
    fontSize:20,
    color:"#0E0C08",
    fontWeight:"400",
    marginLeft:5
  },
  modalContent: {
    backgroundColor: "white",
    width: 300,
    height: 308,
    borderRadius: 10,
    shadowColor: 20

  },
  modalTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "black",
    fontWeight: "600",
    flex:1

  },
  modalOption:{
    flexDirection:"row",
    height:50,
    alignItems:"center"
    
    
  },
  headerPaymenMethod:{
    height:50,
    flexDirection:"row",
    alignItems:"center",
    
  },
  payButton:{

  }

})

export default PaymentScreen
