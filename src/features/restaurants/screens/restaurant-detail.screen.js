import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';

import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />

      <ScrollView>
        <List.Accordion
          title={'Breakfast'}
          left={(props) => <List.Icon {...props} icon={'bread-slice'} />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title={'Fried Eggs with Bacon'} />
          <List.Item title={'Full Scottish Breakfast'} />
        </List.Accordion>

        <List.Accordion
          title={'Lunch'}
          left={(props) => <List.Icon {...props} icon={'hamburger'} />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title={'Burger with fries'} />
          <List.Item title={'Fish and Chips'} />
        </List.Accordion>

        <List.Accordion
          title={'Dinner'}
          left={(props) => <List.Icon {...props} icon={'food-variant'} />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title={'Burger with fries'} />
          <List.Item title={'Salmon Pattie'} />
          <List.Item title={'Mushroom Soup'} />
        </List.Accordion>

        <List.Accordion
          title={'Drinks'}
          left={(props) => <List.Icon {...props} icon={'cup'} />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title={'Coffee'} />
          <List.Item title={'Harvey Wallbanger'} />
          <List.Item title={'Gin and Tonic'} />
          <List.Item title={'The Balvenie'} />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
