import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import ProductNav from '../components/ProductNav';
import slider from '../data/slider';
import ProductSlider from '../components/ProductSlider';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constance/Color';
import Size from '../components/select/Size';
import Color from '../components/select/Color';

const Product = ({ navigation }) => {
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);
  const [sizeVal, setSizeVal] = useState('Size');
  const [colorVal, setColorVal] = useState('color');
  const [favorites, setFavorites] = useState(false);
  console.log(favorites);
  console.log(sizeVal);
  const selectSize = (val) => {
    setSizeVal(val);
    setSize(!size);
  };
  const sizeBool = (val) => {
    setSize(val);
  };
  const colorBool = (val) => {
    setColor(val);
  };
  const selectColor = (val) => {
    setColorVal(val);
    setColor(!color);
  };
  const colorChang = () => {
    setColor(!color);
    setSize(false);
  };

  return (
    <>
      <ScrollView>
        <ProductNav />
        <View style={styles.main}>
          <FlatList
            data={slider}
            renderItem={({ item }) => <ProductSlider item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setSize(!size);
              setColor(false);
            }}
            style={styles.select}
          >
            <Text style={styles.selectText}>{sizeVal}</Text>
            <AntDesign
              style={styles.selectText}
              name="down"
              size={12}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={colorChang} style={styles.select}>
            <Text style={styles.selectText}>{colorVal}</Text>
            <AntDesign
              style={styles.selectText}
              name="down"
              size={12}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setFavorites(!favorites)}>
            <AntDesign name="hearto" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 25 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: '700' }}>H&M</Text>
            <Text style={{ fontSize: 22, fontWeight: '700' }}>$19.99</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '100' }}>Short black dress</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.navigate('ra&re')}>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <Text>(10)</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text>
              Short dress in soft cotton jersey with decorative button downs the
              front and a wide,frill-trimmed
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('bag')}
            style={styles.buttonCon}
          >
            <View style={styles.Button}>
              <Text
                style={{ fontWeight: '500', fontSize: 17, color: COLORS.white }}
              >
                ADD TO CART
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {size && (
        <Size
          size={size}
          title={'Add To Cart'}
          passFaS={selectSize}
          sizeBool={sizeBool}
        />
      )}

      {color && (
        <Color
          title={'Add To Cart'}
          passColor={selectColor}
          colorBool={colorBool}
        />
      )}

      {favorites && sizeVal === 'Size' && (
        <Size
          size={size}
          title={'Add To Favorites'}
          passFaS={selectSize}
          sizeBool={sizeBool}
        />
      )}
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  select: {
    borderWidth: 0.5,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectText: {
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  buttonCon: {
    width: '70%',
    backgroundColor: COLORS.primary,
    marginHorizontal: 40,
    padding: 10,
    marginTop: 30,
    borderRadius: 20,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
