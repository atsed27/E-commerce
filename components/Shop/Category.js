import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../constance/Color';
import { EvilIcons } from '@expo/vector-icons';
const Category = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: '#F9F9F9', marginBottom: 70 }}>
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
          <Text style={{ fontSize: 18, fontWeight: '500' }}>Categories</Text>
          <TouchableOpacity>
            <EvilIcons name="search" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator
          horizontal={true}
          style={styles.categoryCon}
        >
          <TouchableOpacity style={styles.category}>
            <Text
              style={{ paddingVertical: 10, fontSize: 16, fontWeight: '800' }}
            >
              Women
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text
              style={{ paddingVertical: 10, fontSize: 16, fontWeight: '500' }}
            >
              Men
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text
              style={{ paddingVertical: 10, fontSize: 16, fontWeight: '500' }}
            >
              Kid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text
              style={{ paddingVertical: 10, fontSize: 16, fontWeight: '500' }}
            >
              All
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View>
        <View style={styles.middleContainer}>
          <View style={styles.middle}>
            <Text style={styles.middleText}>Summary Sales</Text>
            <Text style={{ color: COLORS.white, textAlign: 'center' }}>
              Up to 50% off
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.ListContainer}>
        <View style={styles.List}>
          <View style={styles.oneList}>
            <Text style={{ fontSize: 18, fontWeight: '700', paddingLeft: 20 }}>
              New
            </Text>
            <Image source={require('../../assets/shop/image 4.1.png')} />
          </View>
        </View>
        <View style={styles.List}>
          <View style={styles.oneList}>
            <Text style={{ fontSize: 18, fontWeight: '700', paddingLeft: 20 }}>
              Clothes
            </Text>
            <Image source={require('../../assets/shop/image.png')} />
          </View>
        </View>

        <View style={styles.List}>
          <View style={styles.oneList}>
            <Text style={{ fontSize: 18, fontWeight: '700', paddingLeft: 20 }}>
              Shoes
            </Text>
            <Image source={require('../../assets/shop/image 2.png')} />
          </View>
        </View>
        <View style={styles.List}>
          <View style={styles.oneList}>
            <Text style={{ fontSize: 18, fontWeight: '700', paddingLeft: 20 }}>
              Accesories
            </Text>
            <Image source={require('../../assets/shop/image 3.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Category;

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
  categoryCon: {
    backgroundColor: '#ffffff',
  },
  category: {
    padding: 5,
    flexDirection: 'row',
    width: 100,
    marginHorizontal: 15,
  },
  middleContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  middle: {
    backgroundColor: COLORS.primary,
    width: '90%',
    paddingVertical: 20,
    borderRadius: 8,
  },
  middleText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 25,
    color: 'white',
  },
  List: {
    marginTop: 15,

    flexDirection: 'row',
    justifyContent: 'center',
  },
  oneList: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: 10,
  },
});
