import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../constance/Color';
const ListProduct = () => {
  return (
    <View style={{ marginTop: 20, marginBottom: 70, marginHorizontal: 20 }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../assets/shop/photo.png')} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>PullOver</Text>
            <Text style={{ fontWeight: '200' }}>dani</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
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
              <View>
                <Text>(3)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>51$</Text>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../assets/shop/photo2.png')} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>PullOver</Text>
            <Text style={{ fontWeight: '200' }}>dani</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
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
              <View>
                <Text>(3)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>51$</Text>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <TouchableOpacity>
            <AntDesign name="heart" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../assets/shop/photo3.png')} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>PullOver</Text>
            <Text style={{ fontWeight: '200' }}>dani</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
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
              <View>
                <Text>(3)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>51$</Text>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../assets/shop/photo4.png')} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>PullOver</Text>
            <Text style={{ fontWeight: '200' }}>dani</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
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
              <View>
                <Text>(3)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>51$</Text>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../assets/shop/photo.png')} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>PullOver</Text>
            <Text style={{ fontWeight: '200' }}>dani</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
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
              <View>
                <Text>(3)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>51$</Text>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../assets/shop/photo3.png')} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>PullOver</Text>
            <Text style={{ fontWeight: '200' }}>dani</Text>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={15}
                  color="#FFBA49"
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
              <View>
                <Text>(3)</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>51$</Text>
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: 'white',
    marginTop: 25,
  },
});
