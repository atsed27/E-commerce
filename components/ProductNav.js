import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constance/Color';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProductNav = () => {
  const navigation = useNavigation();
  return (
    <View>
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
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontWeight: '500', fontSize: 20 }}>Short dress</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="share" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductNav;

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
