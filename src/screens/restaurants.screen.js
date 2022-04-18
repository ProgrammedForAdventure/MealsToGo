import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
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

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  const onChangeText = (text) => {
    console.log(text);
    setSearchQuery(text);
  };

  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blueA100} />
        </LoadingContainer>
      )}

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
