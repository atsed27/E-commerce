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
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const New = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Text style={styles.NewText}>New</Text>
          <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: '100' }}>
            You've never seen it before
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={{ fontSize: 16 }}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate('product')}
          style={styles.newImgContainer}
        >
          <View>
            <ImageBackground
              style={styles.newImg}
              source={require('../assets/product/image(3).png')}
            >
              <View style={styles.overlay2}>
                <Text
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.white,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 10,
                  }}
                >
                  NEW
                </Text>
              </View>
            </ImageBackground>
            <TouchableOpacity style={styles.overlay3}>
              <AntDesign name="hearto" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.des}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>

              <Text style={{ fontSize: 18 }}>(0)</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '200' }}>Sitlly</Text>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                Sport Dress
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 18,
                    textDecorationLine: 'line-through',
                    marginRight: 5,
                  }}
                >
                  15$
                </Text>
                <Text style={{ fontSize: 20, color: COLORS.primary }}>12$</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('product')}
          style={styles.newImgContainer}
        >
          <View>
            <ImageBackground
              style={styles.newImg}
              source={require('../assets/product/image(3) (1).png')}
            >
              <View style={styles.overlay2}>
                <Text
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.white,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 10,
                  }}
                >
                  NEW
                </Text>
              </View>
            </ImageBackground>
            <TouchableOpacity style={styles.overlay3}>
              <AntDesign name="hearto" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.des}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>

              <Text style={{ fontSize: 18 }}>(0)</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '200' }}>Sitlly</Text>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                Man hoodies
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 18,
                    textDecorationLine: 'line-through',
                    marginRight: 5,
                  }}
                >
                  35$
                </Text>
                <Text style={{ fontSize: 20, color: COLORS.primary }}>22$</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('product')}
          style={styles.newImgContainer}
        >
          <View>
            <ImageBackground
              style={styles.newImg}
              source={require('../assets/product/image(4).png')}
            >
              <View style={styles.overlay2}>
                <Text
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.white,
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 10,
                  }}
                >
                  NEW
                </Text>
              </View>
            </ImageBackground>
            <TouchableOpacity style={styles.overlay3}>
              <AntDesign name="hearto" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.des}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="staro"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>

              <Text style={{ fontSize: 18 }}>(0)</Text>
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '200' }}>Sitlly</Text>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                Sport Dress
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 18,
                    textDecorationLine: 'line-through',
                    marginRight: 5,
                  }}
                >
                  15$
                </Text>
                <Text style={{ fontSize: 20, color: COLORS.primary }}>12$</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default New;

const styles = StyleSheet.create({
  NewText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  newImgContainer: {
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  newImg: {
    height: 210,
    width: 160,
  },
  overlay2: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 15,
    marginHorizontal: 10,
  },
  overlay3: {
    position: 'absolute',
    bottom: 0,

    right: 0,
    marginTop: 10,
  },
  des: {
    marginTop: 15,
  },
});
