import React, { useState, useContext } from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import { SafeArea } from '../components/utility/safe-area.component';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  const onChangeText = (text) => {
    console.log(text);
    setSearchQuery(text);
  };

  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          onChangeText={onChangeText}
          placeholder="Search"
          value={searchQuery}
        />
      </SearchContainer>

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
