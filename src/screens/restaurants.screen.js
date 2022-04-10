import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView, StatusBar } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  const onChangeText = (text) => {
    console.log(text);
    setSearchQuery(text);
  };

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          onChangeText={onChangeText}
          placeholder="Search"
          value={searchQuery}
        />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
