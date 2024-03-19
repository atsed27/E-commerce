import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constance/Color';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Button from '../components/Button';

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.top}>
            <AntDesign
              name="left"
              size={30}
              color={COLORS.black}
              onPress={() => navigation.navigate('welcome')}
            />
            <Text style={styles.topText}>Sign up</Text>
          </View>
          <View>
            <View style={styles.middle}>
              <View style={styles.InputBox}>
                <Text style={styles.InputText}>Name</Text>
                <TextInput
                  placeholder="Enter your Full Name"
                  placeholderTextColor={COLORS.grey}
                />
              </View>
            </View>
            <View style={styles.middle}>
              <View style={styles.InputBox}>
                <Text style={styles.InputText}>Email</Text>
                <TextInput
                  placeholder="Enter your email address"
                  placeholderTextColor={COLORS.grey}
                  keyboardType="email-address"
                />
              </View>
            </View>
            <View style={styles.middle}>
              <View style={styles.InputBox}>
                <Text style={styles.InputText}>Password</Text>
                <View>
                  <TextInput
                    placeholder="Enter your password "
                    placeholderTextColor={COLORS.grey}
                    keyboardType="email-address"
                  />
                  <TouchableOpacity
                    onPress={() => setIsPasswordShown(!isPasswordShown)}
                    style={{
                      position: 'absolute',
                      right: 12,
                    }}
                  >
                    {isPasswordShown == true ? (
                      <FontAwesome5 name="eye" size={24} color="black" />
                    ) : (
                      <FontAwesome5 name="eye-slash" size={24} color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('login')}
              style={styles.AlText}
            >
              <Text>Already have an account </Text>
              <AntDesign name="question" size={24} color="black" />
            </TouchableOpacity>
            <Button
              title="Sign Up"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />
          </View>
          <View style={styles.Bottom}>
            <Text style={styles.BottomText}>Or login with social account </Text>
            <View style={styles.social}>
              <TouchableOpacity style={styles.FB}>
                <Image
                  source={require('../assets/facebook.png')}
                  style={{
                    height: 36,
                    width: 36,
                    marginRight: 8,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.Google}>
                <Image
                  source={require('../assets/google.png')}
                  style={{
                    height: 36,
                    width: 36,
                    marginRight: 8,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    marginTop: 20,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  topText: {
    marginVertical: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  middle: {
    marginHorizontal: 20,
    marginRight: 200,
    width: '90%',
    borderColor: COLORS.grey,
    borderWidth: 0.5,
    height: 60,
    borderRadius: 10,
    marginTop: 15,
  },
  InputBox: {
    paddingLeft: 18,
    paddingVertical: 10,
  },
  AlText: {
    marginVertical: 10,
    textAlign: 'right',
    marginHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Bottom: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  BottomText: {
    textAlign: 'center',
    fontSize: 16,
  },
  social: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Google: {
    marginHorizontal: 5,
    marginTop: 20,
  },
  FB: {
    marginHorizontal: 5,
    marginTop: 20,
  },
});
