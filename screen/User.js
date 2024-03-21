import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import COLORS from '../constance/Color';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Layout from '../components/Layout/Layout';

const User = () => {
  return (
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
            <Text style={{ fontWeight: '800', fontSize: 30 }}>My Profile</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.imagePP}
              source={require('../assets/user/pp.jpg')}
            />
          </View>
          <View>
            <Text style={{ fontWeight: 600, fontSize: 20 }}>Daniel Nigatu</Text>
            <Text style={{ paddingTop: 3 }}>danielnigatu09@gmail.com</Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}
                >
                  My Orders
                </Text>
                <Text style={{ color: '#9B9B9B' }}>Already 12 orders</Text>
              </View>
              <Octicons name="chevron-right" size={24} color="#9B9B9B" />
            </View>
            <View style={{ borderWidth: 0.13, marginTop: 12 }} />
          </View>

          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}
                >
                  Shipping Address
                </Text>
                <Text style={{ color: '#9B9B9B' }}>3 Address</Text>
              </View>
              <Octicons name="chevron-right" size={24} color="#9B9B9B" />
            </View>
            <View style={{ borderWidth: 0.13, marginTop: 12 }} />
          </View>

          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}
                >
                  Payment Method
                </Text>
                <Text style={{ color: '#9B9B9B' }}>Visa **34</Text>
              </View>
              <Octicons name="chevron-right" size={24} color="#9B9B9B" />
            </View>
            <View style={{ borderWidth: 0.13, marginTop: 12 }} />
          </View>

          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}
                >
                  Promocodes
                </Text>
                <Text style={{ color: '#9B9B9B' }}>
                  You have spaial promocodes
                </Text>
              </View>
              <Octicons name="chevron-right" size={24} color="#9B9B9B" />
            </View>
            <View style={{ borderWidth: 0.13, marginTop: 12 }} />
          </View>

          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View>
                <Text
                  style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}
                >
                  Setting
                </Text>
                <Text style={{ color: '#9B9B9B' }}>Notification,password</Text>
              </View>
              <Octicons name="chevron-right" size={24} color="#9B9B9B" />
            </View>
            <View style={{ borderWidth: 0.13, marginTop: 12 }} />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default User;

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
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 500,
    position: 'relative',
    marginRight: 20,
  },
  imagePP: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 500,
  },
});
