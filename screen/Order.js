import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Layout from '../components/Layout/Layout';
import COLORS from '../constance/Color';
import { EvilIcons, AntDesign } from '@expo/vector-icons';

const Order = ({ navigation }) => {
  return (
    <Layout>
      <ScrollView
        style={{ marginBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.Top}>
          <View style={styles.TopC}>
            <TouchableOpacity>
              <AntDesign
                name="left"
                size={25}
                color={COLORS.black}
                onPress={() => navigation.navigate('user')}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <EvilIcons name="search" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontWeight: '800', fontSize: 30, marginBottom: 10 }}>
              My Orders
            </Text>
          </View>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <View
              style={{
                backgroundColor: 'black',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: 'white' }}>Delivered</Text>
            </View>
            <View>
              <Text>Processing</Text>
            </View>
            <View>
              <Text>Cancelled</Text>
            </View>
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Order No1937526
              </Text>
              <Text style={{ color: '#9B9B9B' }}>22-03-24</Text>
            </View>

            <Text style={{ paddingTop: 5 }}>
              <Text style={{ color: '#9B9B9B' }}>Ticket number</Text>:
              3435fees53
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
              }}
            >
              <Text>
                <Text style={{ color: '#9B9B9B' }}>Quantity</Text>:
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>3</Text>
              </Text>
              <Text>
                <Text style={{ color: '#9B9B9B' }}>Total Amount</Text>:
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>40$</Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
                marginVertical: 15,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 20,
                  borderColor: 'black',
                  borderWidth: 0.4,
                }}
              >
                <Text
                  style={{ color: 'black', fontSize: 16, fontWeight: '500' }}
                >
                  Details
                </Text>
              </View>
              <Text style={{ color: '#2AA952', fontWeight: 'bold' }}>
                Delivered
              </Text>
            </View>
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Order No1937526
              </Text>
              <Text style={{ color: '#9B9B9B' }}>22-03-24</Text>
            </View>

            <Text style={{ paddingTop: 5 }}>
              <Text style={{ color: '#9B9B9B' }}>Ticket number</Text>:
              3435fees53
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
              }}
            >
              <Text>
                <Text style={{ color: '#9B9B9B' }}>Quantity</Text>:
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>3</Text>
              </Text>
              <Text>
                <Text style={{ color: '#9B9B9B' }}>Total Amount</Text>:
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>40$</Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
                marginVertical: 15,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 20,
                  borderColor: 'black',
                  borderWidth: 0.4,
                }}
              >
                <Text
                  style={{ color: 'black', fontSize: 16, fontWeight: '500' }}
                >
                  Details
                </Text>
              </View>
              <Text style={{ color: '#2AA952', fontWeight: 'bold' }}>
                Delivered
              </Text>
            </View>
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Order No1937526
              </Text>
              <Text style={{ color: '#9B9B9B' }}>22-03-24</Text>
            </View>

            <Text style={{ paddingTop: 5 }}>
              <Text style={{ color: '#9B9B9B' }}>Ticket number</Text>:
              3435fees53
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
              }}
            >
              <Text>
                <Text style={{ color: '#9B9B9B' }}>Quantity</Text>:
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>3</Text>
              </Text>
              <Text>
                <Text style={{ color: '#9B9B9B' }}>Total Amount</Text>:
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>40$</Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 5,
                marginVertical: 15,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 20,
                  borderColor: 'black',
                  borderWidth: 0.4,
                }}
              >
                <Text
                  style={{ color: 'black', fontSize: 16, fontWeight: '500' }}
                >
                  Details
                </Text>
              </View>
              <Text style={{ color: '#2AA952', fontWeight: 'bold' }}>
                Delivered
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Order;

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
});
