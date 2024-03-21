import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constance/Color';
import { EvilIcons } from '@expo/vector-icons';
import ListProduct from '../components/ListProduct';
import { Feather } from '@expo/vector-icons';

const Favorite = () => {
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Top}>
          <View style={styles.TopC}>
            <TouchableOpacity>
              <AntDesign
                name="left"
                size={25}
                color={COLORS.black}
                onPress={() => navigation.navigate('home')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <EvilIcons name="search" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontWeight: '800', fontSize: 30 }}>Favorites</Text>
          </View>
        </View>
        <View>
          <View style={{ marginTop: 10 }}>
            <ScrollView horizontal={true} style={styles.container}>
              <TouchableOpacity style={styles.each}>
                <Text style={{ fontSize: 16, color: 'white' }}>T-shirts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.each}>
                <Text style={{ fontSize: 16, color: 'white' }}>T-shirts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.each}>
                <Text style={{ fontSize: 16, color: 'white' }}>T-shirts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.each}>
                <Text style={{ fontSize: 16, color: 'white' }}>T-shirts</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.viewType}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/shop/baseline-filter_list-24px.png')}
              />
              <Text style={{ marginLeft: 5 }}>Filter</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/shop/baseline-swap_vert-24px.png')}
              />
              <Text style={{ marginLeft: 5 }}>Price:lowe to high</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/shop/View.png')} />
            </View>
          </View>
        </View>

        <ListProduct
          icon={<Feather name="shopping-bag" size={24} color="black" />}
        />
      </ScrollView>
    </Layout>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  Top: {
    marginTop: 40,
    marginHorizontal: 10,
    elevation: 4,
  },
  TopC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 4,
    elevation: 4, // Android shadow
    shadowColor: 'black', // iOS shadow
    shadowOpacity: 0.3, // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowRadius: 4, // iOS shadow
  },
  container: {
    width: '90%',
    marginHorizontal: 20,
  },
  each: {
    backgroundColor: COLORS.black,
    marginRight: 20,
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 15,
  },
  viewType: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: '#F9F9F9',
    padding: 5,
  },
});
