import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';

import New from '../components/New';
import Popular from '../components/Popular';
import HomTop from '../components/HomTop';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <HomTop />
      <View style={styles.Bottom}>
        <New />
        <Popular />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Bottom: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});
