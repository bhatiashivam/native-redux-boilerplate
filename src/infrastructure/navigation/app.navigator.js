import React from "react";

import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { SafeAreaViewContainer } from "../../components/utility/SafeAreaViewContainer";

import { RestaurantsNavigator } from "./restaurants.navigator";
// import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const MapsScreen = () => (
  <SafeAreaViewContainer>
    <Text>Maps</Text>
  </SafeAreaViewContainer>
);

const SettingsScreen = () => (
  <SafeAreaViewContainer>
    <Text>Settings</Text>
  </SafeAreaViewContainer>
);

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
