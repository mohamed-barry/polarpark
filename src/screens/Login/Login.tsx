import React from 'react';
import {Platform, View} from 'react-native';
import {
  Box,
  Button,
  ContentWrapper,
  Input,
  Link,
  SignOnOptions,
  TextDivider,
  Text,
} from '@app/components';
import {AuthStackScreenProps} from '@app/navigation/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useInput} from '@app/hooks';
import {useDispatch} from 'react-redux';
import {setLogin} from '@app/context/features';

export default function Login({
  navigation,
}: AuthStackScreenProps<'Login'>): JSX.Element {
  const email = useInput('');
  const password = useInput('');

  const navigateToForgotPassword = () => navigation.navigate('ForgotPassword');
  const navigateToRegister = () => navigation.navigate('Register');

  const dispatch = useDispatch();
  const login = () => dispatch(setLogin(true)); // todo implement with user token idea

  return (
    <ContentWrapper>
      <SafeAreaView>
        <Box justifyContent="space-between" height="100%">
          <View />
          <View>
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
            <Box flexDirection="row" justifyContent="space-between">
              <View />
              {
                // this is the placeholder for an error message
              }
              <Link
                color="authenticationLink"
                onPress={navigateToForgotPassword}
                mb="m"
                variant="subtitle1">
                Forgot password?
              </Link>
            </Box>
            <Button title="Log in" onPress={login} variant="authentication" />
            <TextDivider label="or log in with" />
            <SignOnOptions />
          </View>
          <Box flexDirection="row" justifyContent="center">
            <Text color="subtitleText" variant="body">
              New to Polar Park?{' '}
            </Text>
            <Link
              color="authenticationLink"
              mb={Platform.OS === 'android' ? 'l' : 'none'}
              fontWeight="bold"
              onPress={navigateToRegister}
              variant="body">
              Register
            </Link>
          </Box>
        </Box>
      </SafeAreaView>
    </ContentWrapper>
  );
}
