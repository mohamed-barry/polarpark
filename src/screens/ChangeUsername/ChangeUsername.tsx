import React from 'react';
import {Box, ContentWrapper, Text} from '@app/components';
import {ScrollView} from 'react-native';

export default function ChangeUsername(): JSX.Element {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ContentWrapper>
        <Box>
          <Text variant="body">test</Text>
        </Box>
      </ContentWrapper>
    </ScrollView>
  );
}
