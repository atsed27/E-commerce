import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constance/Color';
import { AntDesign } from '@expo/vector-icons';
import Button from '../components/Button';
const Forget = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View>
          <View style={styles.top}>
            <AntDesign
              name="left"
              size={30}
              color={COLORS.black}
              onPress={() => navigation.navigate('login')}
            />
            <Text style={styles.topText}>Forget Password</Text>
          </View>
          <View>
            <Text style={styles.middleText}>
              Please Enter your Email Address.You Will receive a link to create
              a new password via email
            </Text>
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
          </View>
          <View style={styles.send}>
            <Button
              title="Send"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Forget;

const styles = StyleSheet.create({
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
    width: '90%',
    borderColor: COLORS.grey,
    borderWidth: 0.5,
    height: 60,
    borderRadius: 10,
    marginTop: 15,
  },
  middleText: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  InputBox: {
    paddingLeft: 18,
    paddingVertical: 10,
  },
  send: {
    marginTop: 50,
  },
});
