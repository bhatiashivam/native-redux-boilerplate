import React from "react";

import { Button, Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { SafeAreaViewContainer } from "../../components/utility/SafeAreaViewContainer";

import { RestaurantsScreen } from "../../features/restaurants/screen/restaurants.screen";
// import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const DetailScreen = ({ navigation }) => {
  return (
    <SafeAreaViewContainer>
      <Text>Detail Info</Text>
      <Button onPress={() => navigation.goBack()}>Go Back</Button>
    </SafeAreaViewContainer>
  );
};

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsHome"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={DetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
