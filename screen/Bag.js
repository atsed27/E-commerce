import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constance/Color';
import { Entypo } from '@expo/vector-icons';

const Bag = () => {
  const [quantity, setQuantity] = useState(1);
  const totalProduct = (vale) => {
    if (vale === 'plus') setQuantity(quantity + 1);
    else {
      if (quantity === 1) setQuantity(1);
      else {
        setQuantity(quantity - 1);
      }
    }
  };
  return (
    <>
      <Layout>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Top}>
            <View style={styles.TopC}>
              <TouchableOpacity></TouchableOpacity>

              <TouchableOpacity>
                <EvilIcons name="search" size={30} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontWeight: '800', fontSize: 30 }}>My Bag</Text>
            </View>
          </View>

          <View
            style={{ marginTop: 20, marginBottom: 260, marginHorizontal: 20 }}
          >
            <View style={styles.container}>
              <TouchableOpacity>
                <Image source={require('../assets/shop/photo.png')} />
              </TouchableOpacity>
              <View style={{ marginHorizontal: 10 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    width: '82.5%',
                  }}
                >
                  <TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>
                      PullOver
                    </Text>
                    <Text style={{ fontWeight: '200' }}>dani</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
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
                          name="staro"
                          size={20}
                          color="black"
                        />
                      </TouchableOpacity>
                      <View>
                        <Text>(3)</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 5 }}>
                    <Entypo
                      name="dots-three-vertical"
                      size={20}
                      color="#9B9B9B"
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => totalProduct('mins')}
                    style={{ borderRadius: 500, borderWidth: 0.3, padding: 3 }}
                  >
                    <AntDesign name="minus" size={20} color="gray" />
                  </TouchableOpacity>
                  <View style={{ marginHorizontal: 7 }}>
                    <Text style={{ fontSize: 16 }}>{quantity}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => totalProduct('plus')}
                    style={{ borderRadius: 500, borderWidth: 0.3, padding: 3 }}
                  >
                    <AntDesign name="plus" size={20} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>51$</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Layout>
      <View style={styles.checkoutCon}>
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: '#9B9B9B', fontSize: 18, fontWeight: 'bold' }}>
            {' '}
            Total amount:
          </Text>

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            ${quantity * 51}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            alert('Next payment integration with chap,strip,paypal')
          }
          style={{
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            borderRadius: 20,
            marginHorizontal: 20,
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
            Check Out
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Bag;

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
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: 'white',
    marginTop: 25,
    width: '100%',
  },
  checkoutCon: {
    backgroundColor: '#ffffff',
    paddingVertical: 4,
    position: 'absolute',
    bottom: 55,
    left: 0,
    right: 0,
    height: 200,
  },
});
