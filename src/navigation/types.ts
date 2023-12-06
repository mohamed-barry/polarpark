import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';

export type BottomBarParamList = {
  Home: undefined;
  Tickets: undefined;
  Ordering: undefined;
  Rewards: undefined;
  Services: undefined;
};

export type RootStackParamList = {
  Main: undefined;
  ViewTicket: undefined;
  Settings: undefined;
  ChangeUsername: undefined;
  ChangePassword: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

export type TicketStackParamList = {
  PurchaseTicket: undefined;
  Wallet: undefined;
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type TicketStackNavigationProps<T extends keyof TicketStackParamList> =
  NativeStackNavigationProp<TicketStackParamList, T>;

export type TicketFlowScreenProps<T extends keyof TicketStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<TicketStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MainFlowScreenProps<T extends keyof BottomBarParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomBarParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
