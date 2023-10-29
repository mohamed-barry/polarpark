import React from 'react';
import {Box, Footer, Placeholder, Section} from '@app/components';
import {ScrollView} from 'react-native';

export default function Services(): JSX.Element {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Section title="Polar Park Features">
        <Box flex={1} flexDirection="row" mb="m">
          <Placeholder mr="m" />
          <Placeholder />
        </Box>
        <Box flex={1} flexDirection="row">
          <Placeholder mr="m" />
          <Placeholder />
        </Box>
      </Section>
      <Section title="Accessibility">
        <Box flex={1} flexDirection="row" mb="m">
          <Placeholder mr="m" />
          <Placeholder />
        </Box>
        <Box flex={1} flexDirection="row">
          <Placeholder mr="m" />
          <Placeholder />
        </Box>
      </Section>
      <Footer text="Have troubles accessing one of our services?" />
    </ScrollView>
  );
}
