import { ScrollView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Category from '../components/Shop/Category';
import Layout from '../components/Layout/Layout';
import HomTop from '../components/HomTop';
import New from '../components/New';
import Popular from '../components/Popular';

const Shop = () => {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Category />
      </ScrollView>
    </Layout>
  );
};

export default Shop;

const styles = StyleSheet.create({});
