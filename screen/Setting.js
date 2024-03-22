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
  const [change, setChange] = useState(false);
  return (
    <>
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

        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}
          >
            <Text style={{ fontWeight: 600, fontSize: 16 }}>Password</Text>
            <TouchableOpacity onPress={() => setChange(!change)}>
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

      {change && (
        <TouchableOpacity
          onPress={() => setChange(!change)}
          style={styles.changeContainer}
        >
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600' }}>
              Password change
            </Text>
          </View>
          <View>
            <View style={styles.InputCont}>
              <View style={styles.InputBox}>
                <TextInput
                  placeholder="Date of Birth"
                  placeholderTextColor={COLORS.grey}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginHorizontal: 20,
                marginTop: 5,
              }}
            >
              <Text>Forget Password</Text>
            </View>
            <View style={styles.InputCont}>
              <View style={styles.InputBox}>
                <TextInput
                  placeholder="New Password"
                  placeholderTextColor={COLORS.grey}
                />
              </View>
            </View>
            <View style={styles.InputCont}>
              <View style={styles.InputBox}>
                <TextInput
                  placeholder="Repeat Password"
                  placeholderTextColor={COLORS.grey}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setChange(!change)}
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
              save
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )}
    </>
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
  changeContainer: {
    backgroundColor: '#C5B5B5',
    paddingVertical: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
