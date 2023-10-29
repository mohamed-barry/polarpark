import React from 'react';
import {ScrollView} from 'react-native';
import {Box, Section, Text} from '@app/components';

function FoodContainer(): JSX.Element {
  return (
    <Box alignItems="center" flexDirection="row" mt="l">
      <Box flex={1} pr="s">
        <Text fontWeight="bold" variant="body">
          Polar Park Hot Dogs
        </Text>
        <Text variant="subtitle1">
          World-class hot dogs provided by Polar Park
        </Text>
      </Box>
      <Box bg="placeholder" borderRadius={12} height={96} width={96} />
    </Box>
  );
}

export default function Ordering(): JSX.Element {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Section
        subtitle="Satisfy your appetite with the best stadium food"
        title="Popular Items">
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
      </Section>
      <Section
        subtitle="Satisfy your appetite with the best stadium food"
        title="Food">
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
      </Section>
      <Section
        subtitle="Satisfy your appetite with the best stadium food"
        title="Drinks">
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
      </Section>
    </ScrollView>
  );
}
