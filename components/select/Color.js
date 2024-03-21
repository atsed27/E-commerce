import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../../constance/Color';

const Color = ({ color, title, passColor, colorBool }) => {
  const selectColor = (val) => {
    passColor(val);
  };

  return (
    <TouchableOpacity
      onPress={() => colorBool(!color)}
      style={styles.selectContainer}
    >
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Select color</Text>
      </View>
      <View style={styles.sizeContainer}>
        <View style={styles.conS}>
          <TouchableOpacity
            onPress={() => selectColor('Black')}
            style={styles.size}
          >
            <Text style={{ fontSize: 16 }}>Black</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectColor('White')}
            style={styles.size}
          >
            <Text style={{ fontSize: 16 }}>White</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectColor('Red')}
            style={styles.size}
          >
            <Text style={{ fontSize: 16 }}>Red</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectColor('Green')}
            style={styles.size}
          >
            <Text style={{ fontSize: 16 }}>Green</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectColor('Blue')}
            style={styles.size}
          >
            <Text style={{ fontSize: 16 }}>Blue</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ paddingVertical: 8 }}>Color Info</Text>
          <AntDesign
            name="right"
            size={15}
            color={COLORS.black}
            style={{ paddingVertical: 8 }}
            onPress={() => navigation.navigate('')}
          />
        </View>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            borderRadius: 20,
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
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Color;

const styles = StyleSheet.create({
  selectContainer: {
    backgroundColor: '#C5B5B5',
    paddingVertical: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '38%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  sizeContainer: {
    marginHorizontal: 20,
    marginTop: 20,

    flexDirection: 'column',
    justifyContent: 'center',
  },
  conS: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  size: {
    width: 90,
    backgroundColor: 'white',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 4,
    borderWidth: 0.5,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
});
