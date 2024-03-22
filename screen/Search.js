import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const Search = () => {
  const pfg = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log(data);
    } else {
      Alert.alert('You need give permission');
    }
  };

  const pfc = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await C.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log(data);
    } else {
      Alert.alert('You need give permission');
    }
  };
  return (
    <TouchableOpacity onPress={() => pfg()} style={{ margin: 60 }}>
      <Text>Search</Text>
    </TouchableOpacity>
  );
};

export default Search;

const styles = StyleSheet.create({});
