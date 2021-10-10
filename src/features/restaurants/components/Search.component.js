import React, { useState } from "react";

import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";

// const SearchContainer = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;

const SearchContainer = styled.View`
  padding: 16px;
`;

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchTerm}
        onSubmitEditing={() => setSearchTerm("")}
        onChangeText={setSearchTerm}
      />
    </SearchContainer>
  );
};
