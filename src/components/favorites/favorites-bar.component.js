import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Text } from '../typography/text.component';

const FavoritesWrapper = styled.View`
  padding-bottom: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }

  return (
    <FavoritesWrapper>
      <View style={{ marginStart: 16 }}>
        <Text>Favorites</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant, index) => {
          const key = restaurant.name.split(' ').join('');

          return (
            <View
              key={key}
              style={{ marginRight: 10, marginLeft: index === 0 ? 10 : 0 }}
            >
              <TouchableOpacity onPress={() => onNavigate(restaurant)}>
                <CompactRestaurantInfo restaurant={restaurant} isMap={false} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
