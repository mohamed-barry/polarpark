/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomBarParamList,
  RootStackParamList,
  TicketStackParamList,
} from '@app/navigation/types';
import {
  Home,
  Ordering,
  Services,
  ViewTicket,
  Settings,
  ChangeUsername,
  ChangePassword,
  PurchaseTicket,
  Wallet,
  Parking,
  Seating,
  InteractiveMap,
  DevPage,
  WebTicket,
} from '@app/screens';

import SecurityServices from '@app/screens/Services/SecurityServices';
import FAQServices from '@app/screens/Services/FAQServices';
import ParkingServices from '@app/screens/Services/ParkingServices';
import WeatherServices from '@app/screens/Services/WeatherServices';

import {Header, Icon} from '@app/components';
import SvgIcon from '@app/components/ui/SvgIcon/SvgIcon';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import theme from '@app/config/theme';
import RewardRouter from './RewardRouter';

import BaseballIcon from '@app/assets/icons/baseball-icon.svg'
import TicketIcon from '@app/assets/icons/ticket-icon.svg'
import FoodIcon from '@app/assets/icons/food-icon.svg'
import RewardsIcon from '@app/assets/icons/ribbon-icon.svg'
import ServerIcon from '@app/assets/icons/server-icon.svg'
import LeftArrow from '@app/assets/icons/left-arrow-icon.svg'

const TicketStack = createNativeStackNavigator<TicketStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootTab = createBottomTabNavigator<BottomBarParamList>();

function Tickets(): JSX.Element {
  return (
    <TicketStack.Navigator
      initialRouteName="PurchaseTicket"
      screenOptions={{headerShown: false}}>
      <TicketStack.Screen name="PurchaseTicket" component={PurchaseTicket} />
      <TicketStack.Screen name="Wallet" component={Wallet} />
    </TicketStack.Navigator>
  );
}

function Main(): JSX.Element {
  return (
    <RootTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => <Header route={props.route} />,
      }}>
      <RootTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgIcon SVG={BaseballIcon} focused={focused} size={24} />
          ),
        }}
      />
      <RootTab.Screen
        name="Tickets"
        component={WebTicket}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgIcon SVG={TicketIcon} focused={focused} size={24} />
          ),
        }}
      />
      <RootTab.Screen
        name="Concessions"
        component={Ordering}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgIcon SVG={FoodIcon} focused={focused} size={24} />
          ),
        }}
      />
      <RootTab.Screen
        name="Rewards"
        component={RewardRouter}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgIcon SVG={RewardsIcon} focused={focused} size={24} />
          ),
          headerShown: false,
        }}
      />
      <RootTab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgIcon SVG={ServerIcon} focused={focused} size={24} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
}

export default function MainRouter(): JSX.Element {
  return (
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="ViewTicket"
        component={ViewTicket}
        options={{
          headerTitle: 'Your tickets',
          headerTintColor: theme.colors.viewTicketHeaderTint,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.colors.viewTicketBackground,
          },
          headerLeft: () => {
            const navigation = useNavigation();
            const goBack = () => navigation.goBack();

            return (
              <SvgIcon
                SVG={LeftArrow}
                focused={true}
                size={24}
                onPress={goBack}
              />
            );
          },
        }}
      />
      <RootStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'Settings',
          headerTintColor: theme.colors.black,
          headerShadowVisible: false,
          headerLeft: () => {
            const navigation = useNavigation();
            const goBack = () => navigation.goBack();
            return (
              <Pressable onPress={goBack}>
                <Icon name="arrow-left" color="black" />
              </Pressable>
            );
          },
        }}
      />
      <RootStack.Screen
        name="ChangeUsername"
        component={ChangeUsername}
        options={{
          headerTitle: 'Change Username',
        }}
      />
      <RootStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerTitle: 'Change Password',
        }}
      />
      <RootStack.Screen
        name="Parking"
        component={Parking}
        options={{
          headerTitle: 'Parking',
          headerTintColor: theme.colors.black,
          headerShadowVisible: false,
          headerLeft: () => {
            const navigation = useNavigation();
            const goBack = () => navigation.goBack();
            return (
              <SvgIcon
                SVG={LeftArrow}
                focused={true}
                size={24}
                onPress={goBack}
              />
            );
          },
        }}
      />
      <RootStack.Screen
        name="Seating"
        component={Seating}
        options={{
          headerTitle: 'Seating',
        }}
      />
      <RootStack.Screen
        name="DevPage"
        component={DevPage}
        options={{
          headerTitle: 'dev',
        }}
      />
      <RootStack.Screen
        name="InteractiveMap"
        component={InteractiveMap}
        options={{
          headerTitle: 'Ballpark Map',
          headerTintColor: theme.colors.black,
          headerShadowVisible: false,
          headerLeft: () => {
            const navigation = useNavigation();
            const goBack = () => navigation.goBack();
            return (
              <SvgIcon
                SVG={LeftArrow}
                focused={true}
                size={24}
                onPress={goBack}
              />
            );
          },
        }}
      />
      <RootStack.Screen
        name="ParkingServices"
        component={ParkingServices}
        options={{
          headerTitle: 'Parking',
          headerTintColor: theme.colors.white,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'rgb(16,41,89)',
          },
          headerLeft: () => {
            const navigation = useNavigation();
            const goBack = () => navigation.goBack();
            return (
              <SvgIcon
                SVG={LeftArrow}
                focused={true}
                size={24}
                onPress={goBack}
              />
            );
          },
        }}
      />
      <RootStack.Screen
        name="SecurityServices"
        component={SecurityServices}
        options={{
          headerTitle: 'Security',
          headerTintColor: theme.colors.white,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'rgb(16,41,89)',
          },
          headerLeft: () => {
            const navigation = useNavigation();
            const goBack = () => navigation.goBack();
            return (
              <SvgIcon
                SVG={LeftArrow}
                focused={true}
                size={24}
                onPress={goBack}
              />
            );
          },
        }}
      />
      <RootStack.Screen
        name="FAQServices"
        component={FAQServices}
        options={{
          headerTitle: 'FAQ',
          headerTintColor: theme.colors.white,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'rgb(16,41,89)',
          },
          headerLeft: () => {
            const navigation = useNavigation();
            const goBack = () => navigation.goBack();
            return (
              <SvgIcon
                SVG={LeftArrow}
                focused={true}
                size={24}
                onPress={goBack}
              />
            );
          },
        }}
      />
      <RootStack.Screen
        name="WeatherServices"
        component={WeatherServices}
        options={{
          headerTitle: 'Weather Policy',
          headerTintColor: theme.colors.white,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: 'rgb(16,41,89)',
          },
          headerLeft: () => {
            const navigation = useNavigation();
            const goBack = () => navigation.goBack();
            return (
              <SvgIcon
                SVG={LeftArrow}
                focused={true}
                size={24}
                onPress={goBack}
              />
            );
          },
        }}
      />
    </RootStack.Navigator>
  );
}
