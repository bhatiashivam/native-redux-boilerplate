import React from "react";

import { FlatList, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import { SafeAreaViewContainer } from "../../../components/utility/SafeAreaViewContainer";
import { Spacer } from "../../../components/spacer/Spacer.component";
import { Search } from "../components/Search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

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
        data={[1, 2, 3, 4, 5]}
        // add key extractor prop here to provide key to each list item
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
