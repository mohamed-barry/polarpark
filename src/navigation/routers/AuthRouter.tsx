import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@app/navigation/types';
import {ForgotPassword, Login, Register} from '@app/screens';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@app/components';
import {Pressable} from 'react-native';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthRouter(): JSX.Element {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitle: '',
        headerShadowVisible: false,
        headerLeft: () => {
          const navigation = useNavigation();
          const goBack = () => navigation.goBack();
          return (
            <Pressable onPress={goBack}>
              <Icon name="arrow-left" color="authenticationHeaderTint" />
            </Pressable>
          );
        },
      }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
}
