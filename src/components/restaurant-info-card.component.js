import React from 'react';

import { SvgXml } from 'react-native-svg';

import star from '../../assets/star';
import open from '../../assets/open';
import { Spacer } from './spacer.component';
import { Text } from '../typography/text.component';
import {
  Icon,
  RestaurantCard,
  Info,
  SectionEnd,
  Section,
  Rating,
  RestaurantCardCover,
  Address,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}

              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>

              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
