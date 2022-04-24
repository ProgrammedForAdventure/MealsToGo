import React, { useContext, useState } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { FlatList, TouchableOpacity } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import { SafeArea } from '../components/utility/safe-area.component';
import { RestaurantsContext } from '../services/restaurants/restaurants.context';
import { Search } from '../components/search.component';
import { FavoritesBar } from '../components/favorites/favorites-bar.component';
import { FavoritesContext } from '../services/favorites/favorites.context';

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

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const [isFavoritesToggled, setIsFavoritesToggled] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  const onNavigate = (item) => {
    navigation.navigate('RestaurantDetail', {
      restaurant: item,
    });
  };

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blueA100} />
        </LoadingContainer>
      )}

      <Search
        isFavoritesToggled={isFavoritesToggled}
        onFavoritesToggle={() => setIsFavoritesToggled(!isFavoritesToggled)}
      />

      {isFavoritesToggled && (
        <FavoritesBar favorites={favorites} onNavigate={onNavigate} />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => onNavigate(item)}>
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
