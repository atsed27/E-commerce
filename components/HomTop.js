import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import COLORS from '../constance/Color';

const HomTop = () => {
  return (
    <View>
      <ImageBackground
        style={styles.imgContainer}
        resizeMode="cover"
        source={require('../assets/Big Banner.png')}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Fashion</Text>
          <Text style={styles.text}>sale</Text>
          <TouchableOpacity style={styles.checkBtn}>
            <Text style={styles.checkText}>Check</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomTop;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 45,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 14,
  },
  checkBtn: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 14,
    paddingHorizontal: 60,
    paddingVertical: 8,
    marginBottom: 30,
    borderRadius: 10,
  },
  checkText: {
    color: 'white',
  },
});
