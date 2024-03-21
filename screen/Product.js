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

const Product = () => {
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);
  const [sizeVal, setSizeVal] = useState('Size');
  const [colorVal, setColorVal] = useState('color');

  const selectSize = (val) => {
    setSizeVal(val);
    setSize(!size);
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

          <TouchableOpacity>
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
          <TouchableOpacity style={styles.buttonCon}>
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
        <TouchableOpacity
          onPress={() => setSize(!setSize)}
          style={styles.selectContainer}
        >
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Select size</Text>
          </View>
          <View style={styles.sizeContainer}>
            <View style={styles.conS}>
              <TouchableOpacity
                onPress={() => selectSize('XS')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>XS</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectSize('S')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectSize('M')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectSize('L')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>L</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectSize('XL')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>XL</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 10,
                borderBottomWidth: 0.5,
                borderTopWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ paddingVertical: 8 }}>Size Info</Text>
              <AntDesign
                name="right"
                size={15}
                color={COLORS.black}
                style={{ paddingVertical: 8 }}
                onPress={() => navigation.navigate('')}
              />
            </View>
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  paddingVertical: 10,
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                ADD TO CART
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}

      {color && (
        <TouchableOpacity
          onPress={() => setColor(!color)}
          style={styles.selectContainer}
        >
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600' }}>
              Select color
            </Text>
          </View>
          <View style={styles.sizeContainer}>
            <View style={styles.conS}>
              <TouchableOpacity
                onPress={() => selectColor('Black')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>Black</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectColor('White')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>White</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectColor('Red')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>Red</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectColor('Green')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>Green</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => selectColor('Blue')}
                style={styles.size}
              >
                <Text style={{ fontSize: 16 }}>Blue</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 10,
                borderBottomWidth: 0.5,
                borderTopWidth: 0.5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ paddingVertical: 8 }}>Color Info</Text>
              <AntDesign
                name="right"
                size={15}
                color={COLORS.black}
                style={{ paddingVertical: 8 }}
                onPress={() => navigation.navigate('')}
              />
            </View>
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  paddingVertical: 10,
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 600,
                }}
              >
                ADD TO CART
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
  selectContainer: {
    backgroundColor: '#C5B5B5',
    paddingVertical: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '38%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  sizeContainer: {
    marginHorizontal: 20,
    marginTop: 20,

    flexDirection: 'column',
    justifyContent: 'center',
  },
  conS: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  size: {
    width: 90,
    backgroundColor: 'white',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 4,
    borderWidth: 0.5,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
});
