import React from "react";

import { FlatList, TouchableOpacity, Text } from "react-native";

import styled from "styled-components/native";

import { SafeAreaViewContainer } from "../../../components/utility/SafeAreaViewContainer";
import { Search } from "../components/Search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import DATA from "../data/Data";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  return (
    <SafeAreaViewContainer>
      <Search />

      <RestaurantList
        data={DATA}
        keyExtractor={(item) => item.placeId}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={console.log}>
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaViewContainer>
  );
};
