import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import COLORS from '../constance/Color';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TextArea from 'react-native-textarea';

const RatingAndReviews = () => {
  const [write, setWrite] = useState(true);
  return (
    <>
      <ScrollView style={{ backgroundColor: '#9B9B9B' }}>
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

            <TouchableOpacity>
              <EvilIcons name="search" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontWeight: '800', fontSize: 30 }}>
              Rating&Reviews
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10, marginHorizontal: 10 }}>
          <Text>
            Rating and reviews are verified and are from people who use the same
            type of product that you use
          </Text>
          <View style={{ marginTop: 10, flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 50 }}>4.5</Text>
              <View style={{ flexDirection: 'row', marginTop: 5 }}>
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={10}
                  color="#FFBA49"
                />
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={10}
                  color="#FFBA49"
                />
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={10}
                  color="#FFBA49"
                />
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={10}
                  color="#FFBA49"
                />
                <AntDesign
                  style={{ marginRight: 2 }}
                  name="star"
                  size={10}
                  color="#FFBA49"
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View>
                <Text>5</Text>
                <Text>4</Text>
                <Text>3</Text>
                <Text>2</Text>
                <Text>1</Text>
              </View>
              <View style={{ marginLeft: 10, width: '60%' }}>
                <View
                  style={{ borderWidth: 0.5, borderRadius: 40, marginTop: 2 }}
                >
                  <View
                    style={{
                      borderWidth: 0.3,
                      borderRadius: 40,
                      width: '80%',
                      backgroundColor: COLORS.primary,
                      paddingVertical: 4,
                    }}
                  ></View>
                </View>
                <View
                  style={{ borderWidth: 0.5, borderRadius: 40, marginTop: 8 }}
                >
                  <View
                    style={{
                      borderWidth: 0.3,
                      borderRadius: 40,
                      width: '70%',
                      backgroundColor: COLORS.primary,
                      paddingVertical: 4,
                    }}
                  ></View>
                </View>
                <View
                  style={{ borderWidth: 0.5, borderRadius: 40, marginTop: 8 }}
                >
                  <View
                    style={{
                      borderWidth: 0.3,
                      borderRadius: 40,
                      width: '50%',
                      backgroundColor: COLORS.primary,
                      paddingVertical: 4,
                    }}
                  ></View>
                </View>
                <View
                  style={{ borderWidth: 0.5, borderRadius: 40, marginTop: 8 }}
                >
                  <View
                    style={{
                      borderWidth: 0.3,
                      borderRadius: 40,
                      width: '20%',
                      backgroundColor: COLORS.primary,
                      paddingVertical: 4,
                    }}
                  ></View>
                </View>
                <View
                  style={{ borderWidth: 0.5, borderRadius: 40, marginTop: 8 }}
                >
                  <View
                    style={{
                      borderWidth: 0.3,
                      borderRadius: 40,
                      width: '10%',
                      backgroundColor: COLORS.primary,
                      paddingVertical: 4,
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>8 reviews</Text>
          <View style={{ position: 'relative', marginBottom: 10 }}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imagePP}
                source={require('../assets/user/pp.jpg')}
              />
            </View>
            <View style={styles.reviewsContainer}>
              <Text style={{ fontSize: 18, fontWeight: '800' }}>
                Helen melese
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 3,
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                </View>
                <Text>Mar 21,2024</Text>
              </View>
              <View>
                <Text style={{ fontSize: 15 }}>
                  The dress is great! Very classy and comfortable. It fit
                  perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This
                  dress would be too long for those who are shorter but could be
                  hemmed. I wouldn't recommend it for those big chested as I am
                  smaller chested and it fit me perfectly. The underarms were
                  not too wide and the dress was made well.
                </Text>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ paddingRight: 10, fontSize: 15 }}>
                    Helpful
                  </Text>
                  <TouchableOpacity>
                    <AntDesign name="like1" size={24} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{ position: 'relative', marginBottom: 10 }}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imagePP}
                source={require('../assets/user/pp.jpg')}
              />
            </View>
            <View style={styles.reviewsContainer}>
              <Text style={{ fontSize: 18, fontWeight: '800' }}>
                Helen melese
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 3,
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                  <AntDesign
                    style={{ marginRight: 2 }}
                    name="star"
                    size={15}
                    color="#FFBA49"
                  />
                </View>
                <Text>Mar 21,2024</Text>
              </View>
              <View>
                <Text style={{ fontSize: 15 }}>
                  The dress is great! Very classy and comfortable. It fit
                  perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This
                  dress would be too long for those who are shorter but could be
                  hemmed. I wouldn't recommend it for those big chested as I am
                  smaller chested and it fit me perfectly. The underarms were
                  not too wide and the dress was made well.
                </Text>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ paddingRight: 10, fontSize: 15 }}>
                    Helpful
                  </Text>
                  <TouchableOpacity>
                    <AntDesign name="like1" size={24} color="gray" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {write && (
        <TouchableOpacity onPress={() => setWrite(!write)} style={styles.write}>
          <FontAwesome name="pencil" size={20} color="white" />
          <Text style={{ paddingLeft: 5, color: 'white' }}>Write a review</Text>
        </TouchableOpacity>
      )}
      {!write && (
        <TouchableOpacity style={styles.writeContainer}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '500' }}>
              What is you rate?
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="staro"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="staro"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="staro"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="staro"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  style={{ marginRight: 10 }}
                  name="staro"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            }}
          >
            <View style={{ width: '60%', alignItems: 'center' }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                Please share your opinion about the product
              </Text>
            </View>
          </View>

          <View style={styles.InputBox}>
            <View style={styles.textArea}>
              <TextArea
                placeholder="Enter your password "
                placeholderTextColor={COLORS.grey}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.primary,
                padding: 10,
                width: '70%',
                borderRadius: 20,
              }}
            >
              <Text
                onPress={() => setWrite(!write)}
                style={{ textAlign: 'center', color: 'white' }}
              >
                Sen Review
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default RatingAndReviews;

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
  imageContainer: {
    overflow: 'hidden',
    borderRadius: 500,
    position: 'relative',
    top: 20,
    zIndex: 999,
  },
  imagePP: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 500,
  },
  reviewsContainer: {
    backgroundColor: '#ffffff',
    borderWidth: 0.3,
    position: 'relative',
    marginHorizontal: 15,
    borderRadius: 8,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  write: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  writeContainer: {
    backgroundColor: '#F9F9F9',
    paddingVertical: 4,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  textArea: {
    borderColor: '#3ede',
    borderWidth: 1,
    backgroundColor: '#ffff',
    height: 150,
    justifyContent: 'flex-start',
    fontSize: 16,
    padding: 5,
  },
  InputBox: {
    marginHorizontal: 18,
    paddingVertical: 10,
  },
});
