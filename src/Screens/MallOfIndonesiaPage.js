import React, { useEffect } from 'react';
import { Text, View, FlatList, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, setPage } from '../redux/mallIndonesiaSlice';
import Header from '../components/Header';
import ProductComponent from '../components/ProductConponent';

const MallOfIndonesiaPage = () => {
  const dispatch = useDispatch();
  const { products, status, error, currentPage } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchItems({ page: currentPage }));
  }, [dispatch, currentPage]);

 

  const handleNextPage = () => {
    dispatch(setPage(currentPage + 1));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

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

  const renderItem = ({ item }) => <ProductComponent item={item} />;

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Button title="Previous" onPress={handlePrevPage} disabled={currentPage === 1} />
        {products.length >1 &&(
          <Button title="Next" onPress={handleNextPage} />
        )}
        

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default MallOfIndonesiaPage;
