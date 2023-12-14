import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DEFAULT_REWARDS_LOGIN_TOKEN,
  REWARDS_LOGIN_TOKEN_ID,
} from '../constants';
import {fanmakerPostRequest} from './fanmakerAPIRequest';
import { UserInfo } from './getProfileInfo';

export type SignUpParams = {
  first_name: string;
  last_name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  race?: string;
  gender?: string;
  phoneNumber: string;
  marital?: string;
};

export async function signUp(
  email: string,
  password: string,
  params: SignUpParams,
): Promise<boolean> {
  let respBody: any = {
    email: email,
    password: password,
    feature: 'missing',
    referral_token: '',
    first_name: params.first_name,
    last_name: params.last_name,
    'address[country]': 'US',
    'address[throughfare]': params.address1,
    'address[premise]': params.address2,
    'address[localityname]': params.city,
    'address[administrativearea]': params.state,
    'address[postalcode]': params.zipcode,
    'address[phone]': params.phoneNumber,
    address: {
      country: 'US',
      thoroughfare: params.address1,
      premise: params.address2,
      localityname: params.city,
      administrativearea: params.state,
      postalcode: params.zipcode,
      phone: params.phoneNumber,
    },
    country: 'US',
    thoroughfare: params.address1,
    premise: params.address2,
    localityname: params.city,
    administrativearea: params.state,
    postalcode: params.zipcode,
    phone: params.phoneNumber,
  };

  if (params.gender !== undefined) {
    respBody.gender = params.gender;
  }

  if (params.marital !== undefined) {
    respBody.marital_status = params.marital;
  }

  if (params.race !== undefined) {
    respBody.race = params.race;
  }

  try {
    const resp = await fanmakerPostRequest(
      'https://api.fanmaker.com/api/v2/registration',
      DEFAULT_REWARDS_LOGIN_TOKEN,
      JSON.stringify(respBody),
    );

    if (resp.code >= 200 && resp.code < 400) {
      await AsyncStorage.setItem(REWARDS_LOGIN_TOKEN_ID, resp.data.token);
    } else {
      throw new Error(resp.message);
    }
  } catch (e) {
    console.error(e);
    if (e instanceof Error)
      throw new Error(
        'Unable to make new account due to ' + e.message + ' ' + e.stack,
      );
    throw new Error('Unable to make new account');
  }

  return true;
}

export async function updateRewardsAccount(ui: UserInfo): Promise<boolean> {
  let respBody: any = {
    feature: 'missing',
    referral_token: '',
    first_name: ui.firstName,
    last_name: ui.lastName,
    'address[country]': 'US',
    'address[throughfare]': ui.address1,
    'address[premise]': ui.address2,
    'address[localityname]': ui.city,
    'address[administrativearea]': ui.state,
    'address[postalcode]': ui.zipCode,
    'address[phone]': ui.phoneNumber,
    address: {
      country: 'US',
      thoroughfare: ui.address1,
      premise: ui.address2,
      localityname: ui.city,
      administrativearea: ui.state,
      postalcode: ui.zipCode,
      phone: ui.phoneNumber,
    },
    country: 'US',
    thoroughfare: ui.address1,
    premise: ui.address2,
    localityname: ui.city,
    administrativearea: ui.state,
    postalcode: ui.zipCode,
    phone: ui.phoneNumber,
    gender: ui.gender,
    marital_status: ui.maritalStatus,
    race: ui.race
  };

  try {
    const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);

    if (token == null) {
      throw new Error("User not signed in");
    }

    const resp = await fanmakerPostRequest(
      'https://api.fanmaker.com/api/v2/registration',
      token,
      JSON.stringify(respBody),
    );

    if (resp.code >= 200 && resp.code < 400) {
      return true;
    } else {
      throw new Error(resp.message);
    }
  } catch (e) {
    console.error(e);
    if (e instanceof Error)
      throw new Error(
        'Unable to update account due to ' + e.message + ' ' + e.stack,
      );
    throw new Error('Unable to update account');
  }
}