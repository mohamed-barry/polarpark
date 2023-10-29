import React from 'react';
import {Box, Button, ContentWrapper, Input, Link, Text} from '@app/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useInput} from '@app/hooks';
import {Platform} from 'react-native';

export default function Register(): JSX.Element {
  const firstName = useInput('');
  const lastName = useInput('');
  const email = useInput('');
  const password = useInput('');

  return (
    <ContentWrapper>
      <SafeAreaView edges={['bottom']}>
        <Box justifyContent="space-between" height="100%" pt="l">
          <Box>
            <Text color="registerHeader" variant="heading1">
              Sign Up
            </Text>
            <Text color="subtitleText" mb="m" variant="body">
              Create an account to experience everything Polar Park has to offer
            </Text>
            <Input
              mb="m"
              iconName="user"
              placeholder="First name"
              variant="authentication"
              {...firstName}
            />
            <Input
              mb="m"
              iconName="user"
              placeholder="Last name"
              variant="authentication"
              {...lastName}
            />
            <Input
              mb="m"
              iconName="mail"
              placeholder="Email address"
              variant="authentication"
              {...email}
            />
            <Input
              mb="m"
              iconName="lock"
              placeholder="Password"
              type="password"
              variant="authentication"
              {...password}
            />
            <Button
              mt="m"
              onPress={() => {}}
              title="Register"
              variant="authentication"
            />
          </Box>
          <Box
            alignItems="center"
            mb={Platform.OS === 'android' ? 'l' : 'none'}>
            <Text textAlign="center" variant="subtitle1">
              By signing up, you’re agreeing to our
            </Text>
            <Box flexDirection="row">
              <Link
                color="authenticationLink"
                onPress={() => {}}
                fontWeight="bold"
                variant="subtitle1">
                Terms of Use{' '}
                <Text fontWeight="300" variant="subtitle1">
                  and
                </Text>{' '}
              </Link>
              <Link
                color="authenticationLink"
                onPress={() => {}}
                fontWeight="bold"
                variant="subtitle1">
                Privacy Policy
              </Link>
            </Box>
          </Box>
        </Box>
      </SafeAreaView>
    </ContentWrapper>
  );
}
