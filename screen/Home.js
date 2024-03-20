import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import New from '../components/New';
import Popular from '../components/Popular';
import HomTop from '../components/HomTop';
import Layout from '../components/Layout/Layout';

const Home = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomTop />
        <View style={styles.Bottom}>
          <New />
          <Popular />
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  Bottom: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});
