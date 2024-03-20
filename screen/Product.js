import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductNav from '../components/ProductNav';
import slider from '../data/slider';
import ProductSlider from '../components/ProductSlider';

const Product = () => {
  return (
    <ScrollView>
      <ProductNav />
      <View style={styles.main}>
        <FlatList
          data={slider}
          renderItem={({ item }) => <ProductSlider item={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({});
