import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Bag,
  Catalog,
  Favorite,
  Forget,
  Home,
  Login,
  Order,
  Product,
  RatingAndReviews,
  Search,
  Setting,
  Signup,
  User,
  Welcome,
} from './screen';
import Shop from './screen/Shop';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="login"
          component={Login}
        />
        <Stack.Screen
          name="signup"
          options={{
            headerShown: false,
          }}
          component={Signup}
        />
        <Stack.Screen
          name="forget"
          options={{
            headerShown: false,
          }}
          component={Forget}
        />
        <Stack.Screen
          name="shop"
          options={{
            headerShown: false,
          }}
          component={Shop}
        />
        <Stack.Screen
          name="bag"
          options={{
            headerShown: false,
          }}
          component={Bag}
        />
        <Stack.Screen
          name="favorite"
          options={{
            headerShown: false,
          }}
          component={Favorite}
        />

        <Stack.Screen
          name="user"
          options={{
            headerShown: false,
          }}
          component={User}
        />
        <Stack.Screen
          name="catalog"
          options={{
            headerShown: false,
          }}
          component={Catalog}
        />
        <Stack.Screen
          name="product"
          options={{
            headerShown: false,
          }}
          component={Product}
        />
        <Stack.Screen
          name="ra&re"
          options={{
            headerShown: false,
          }}
          component={RatingAndReviews}
        />

        <Stack.Screen
          name="setting"
          options={{
            headerShown: false,
          }}
          component={Setting}
        />

        <Stack.Screen
          name="order"
          options={{
            headerShown: false,
          }}
          component={Order}
        />

        <Stack.Screen
          name="search"
          options={{
            headerShown: false,
          }}
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
