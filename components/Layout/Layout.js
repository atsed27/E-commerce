import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <View>{children}</View>
      <Footer />
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
