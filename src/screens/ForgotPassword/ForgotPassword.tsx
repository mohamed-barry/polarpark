import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Button, ContentWrapper, Input, Text} from '@app/components';
import {useInput} from '@app/hooks';

export default function ForgotPassword(): JSX.Element {
  const email = useInput('');

  return (
    <ContentWrapper>
      <SafeAreaView edges={['bottom']}>
        <Box height="100%" pt="l">
          <Text color="registerHeader" variant="heading1">
            Forgot your password?
          </Text>
          <Text mb="m" color="subtitleText" variant="body">
            Don't worry! It happens to everyone. Please enter the email
            associated with your account.
          </Text>
          <Input
            mb="m"
            iconName="mail"
            placeholder="Email address"
            variant="authentication"
            {...email}
          />
          <Button
            mt="m"
            title="Reset your password"
            onPress={() => {}}
            variant="authentication"
          />
        </Box>
      </SafeAreaView>
    </ContentWrapper>
  );
}
