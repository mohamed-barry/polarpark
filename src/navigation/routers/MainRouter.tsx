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
} from '@app/screens';

import {Header, Icon} from '@app/components';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import theme from '@app/config/theme';
import RewardRouter from './RewardRouter';

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
            <Icon name="baseball" focused={focused} size={24} />
          ),
        }}
      />
      <RootTab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="ticket" focused={focused} size={24} />
          ),
        }}
      />
      <RootTab.Screen
        name="Concessions"
        component={Ordering}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="food" focused={focused} size={24} />
          ),
        }}
      />
      <RootTab.Screen
        name="Rewards"
        component={RewardRouter}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="basket" focused={focused} size={24} />
          ),
          headerShown: false,
        }}
      />
      <RootTab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="service" focused={focused} size={24} />
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
              <Pressable onPress={goBack}>
                <Icon name="arrow-left" color="viewTicketHeaderTint" />
              </Pressable>
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
        }}
      />
    </RootStack.Navigator>
  );
}
