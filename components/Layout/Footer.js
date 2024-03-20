import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../../constance/Color';
import { useRoute, useNavigation } from '@react-navigation/native';

const Footer = () => {
  const router = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.IconsContainer}>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('home')}
        >
          {router.name === 'home' ? (
            <Entypo name="home" size={30} color={COLORS.primary} />
          ) : (
            <AntDesign name="home" size={30} color="black" />
          )}
          <Text style={[router.name === 'home' && { color: COLORS.primary }]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('shop')}
        >
          {router.name === 'shop' || router.name === 'catalog' ? (
            <MaterialIcons
              name="shopping-cart"
              size={30}
              color={COLORS.primary}
            />
          ) : (
            <AntDesign name="shoppingcart" size={30} color="black" />
          )}
          <Text style={[router.name === 'shop' && { color: COLORS.primary }]}>
            Shop
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('bag')}
        >
          {router.name === 'bag' ? (
            <Ionicons
              name="bag-handle-sharp"
              size={30}
              color={COLORS.primary}
            />
          ) : (
            <Ionicons name="bag-check-outline" size={30} color="black" />
          )}
          <Text style={[router.name === 'bag' && { color: COLORS.primary }]}>
            Bag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('favorite')}
        >
          {router.name === 'favorite' ? (
            <MaterialIcons name="favorite" size={30} color={COLORS.primary} />
          ) : (
            <MaterialIcons name="favorite-border" size={30} color="black" />
          )}
          <Text
            style={[router.name === 'favorite' && { color: COLORS.primary }]}
          >
            Favorite
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('user')}
        >
          {router.name === 'user' ? (
            <FontAwesome name="user" size={30} color={COLORS.primary} />
          ) : (
            <FontAwesome name="user-o" size={30} color="black" />
          )}
          <Text style={[router.name === 'user' && { color: COLORS.primary }]}>
            User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  IconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
