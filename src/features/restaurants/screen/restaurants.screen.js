import React from "react";

import { FlatList, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import { SafeAreaViewContainer } from "../../../components/utility/SafeAreaViewContainer";
import { Search } from "../components/Search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";

import DATA from "../data/Data";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeAreaViewContainer>
      <Search />

      <RestaurantList
        data={DATA}
        keyExtractor={(item) => item.placeId}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={console.log}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaViewContainer>
  );
};
