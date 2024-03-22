import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const Search = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } else {
      Alert.alert('You need to give permission to access the image gallery.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImageUpload} style={styles.button}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 60,
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: 'contain',
  },
});
