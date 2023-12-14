import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DEFAULT_REWARDS_LOGIN_TOKEN,
  REWARDS_LOGIN_TOKEN_ID,
} from '../constants';
import {fanmakerPostRequest} from './fanmakerAPIRequest';

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
