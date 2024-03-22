import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../constance/Color';
import { EvilIcons, AntDesign } from '@expo/vector-icons';

const Setting = () => {
  const [sellBool, setSellBoll] = useState(false);
  const [newArrive, setNewArrive] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
            Settings
          </Text>
          <Text>Personal Information</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={styles.InputCont}>
          <View style={styles.InputBox}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={COLORS.grey}
            />
          </View>
        </View>

        <View style={styles.InputCont}>
          <View style={styles.InputBox}>
            <TextInput
              placeholder="Date of Birth"
              placeholderTextColor={COLORS.grey}
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 60 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: 600, fontSize: 16 }}>Password</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16 }}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.InputCont}>
          <View style={styles.InputBox}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={COLORS.grey}
            />
          </View>
        </View>
      </View>

      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={{ fontWeight: '600', fontSize: 18 }}>Notification</Text>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 18 }}>Sell</Text>
            <TouchableOpacity onPress={() => setSellBoll(!sellBool)}>
              {!sellBool ? (
                <FontAwesome name="toggle-off" size={30} color="gray" />
              ) : (
                <FontAwesome name="toggle-on" size={30} color="green" />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 18 }}>New arrive</Text>
            <TouchableOpacity onPress={() => setNewArrive(!newArrive)}>
              {!newArrive ? (
                <FontAwesome name="toggle-off" size={30} color="gray" />
              ) : (
                <FontAwesome name="toggle-on" size={30} color="green" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 18 }}>Deliver state change</Text>
            <TouchableOpacity onPress={() => setNewArrive(!newArrive)}>
              {!newArrive ? (
                <FontAwesome name="toggle-off" size={30} color="gray" />
              ) : (
                <FontAwesome name="toggle-on" size={30} color="green" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Setting;

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
  InputCont: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    width: '90%',
    borderColor: COLORS.grey,
    borderWidth: 0.5,
    height: 60,
    borderRadius: 10,
    marginTop: 15,
  },
  InputBox: {
    paddingLeft: 18,
    paddingVertical: 13,
  },
});
