import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkStale, newStaleTime } from "../cache/checkStale";
import { CachedAPICallProps } from "../model/types";
import { REWARDS_LOGIN_TOKEN_ID, REWARDS_PROFILE_CACHE_ID, REWARDS_USER_INFO_CACHE_ID } from "../constants";
import { fanmakerGetRequest } from "./fanmakerAPIRequest";
import { ImageURISource } from "react-native";

export type ProfileInfo = {
    name: string,
    avatar: ImageURISource,
    userID: string
}

export async function getProfileInfo({useCache = true}: CachedAPICallProps): Promise<ProfileInfo> {
    try {
        if (useCache) {
            const pointsCache = await AsyncStorage.getItem(REWARDS_PROFILE_CACHE_ID);

            if (pointsCache !== null) {
                const pointsObj = JSON.parse(pointsCache);
                if (!checkStale(pointsObj.staleDate)) {
                    return pointsObj.info;
                }
            }
        }

        const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);
        if (token === null) {
            throw new Error("User not logged In");
        }

        const resp = await fanmakerGetRequest("https://api.fanmaker.com/api/v2/profile", token);
        if (resp.code >= 200 && resp.code < 400) {
            const data = resp.data;
            // console.log(data);

            const retObj: ProfileInfo = {
                name: data.full_name,
                avatar: {uri: data.avatar},
                userID: data.member_id
            }
            
            const nextTime = newStaleTime({days: 5});
            const cacheItem = {
                info: retObj,
                staleDate: nextTime
            }
            AsyncStorage.setItem(REWARDS_PROFILE_CACHE_ID, JSON.stringify(cacheItem));

            return retObj;
        } else {
            throw new Error("Failed to connect to API due to " + resp.message);
        }
    } catch (e) {
        if (e instanceof Error) throw new Error("Unable to get User's Profile caused by: " + e.message + e.stack)
        throw new Error("Unable to get User's Profile");
    }
}

export type UserInfo = {
    firstName: string,
    lastName: string,
    address1: string,
    address2: string,
    state: string,
    city: string,
    zipCode: string,
    gender: string,
    race: string,
    maritalStatus: string,
    phoneNumber: string,
    // ... add other fields as necessary
  }

export async function getUserInfo({useCache = true}:CachedAPICallProps): Promise<UserInfo> {
    try {
        if (useCache) {
            const pointsCache = await AsyncStorage.getItem(REWARDS_USER_INFO_CACHE_ID);

            if (pointsCache !== null) {
                const pointsObj = JSON.parse(pointsCache);
                if (!checkStale(pointsObj.staleDate)) {
                    return pointsObj.info;
                }
            }
        }

        const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);
        if (token === null) {
            throw new Error("User not logged In");
        }

        const resp = await fanmakerGetRequest("https://api.fanmaker.com/api/v2/profile", token);
        if (resp.code >= 200 && resp.code < 400) {
            const data = resp.data;
            // console.log(data);

            const retObj: UserInfo = {
                firstName: data.first_name,
                lastName: data.last_name,
                address1: data.profile_data.data.address_1,
                address2: data.profile_data.data.address_2,
                city: data.profile_data.data.city,
                state: data.profile_data.data.state,
                zipCode: data.profile_data.data.zip,
                phoneNumber: data.profile_data.data.phone,
                gender: data.profile_data.data.gender,
                race: data.profile_data.data.race,
                maritalStatus: data.profile_data.data.marital_status,
            }
            
            const nextTime = newStaleTime({hours: 1});
            const cacheItem = {
                info: retObj,
                staleDate: nextTime
            }
            AsyncStorage.setItem(REWARDS_USER_INFO_CACHE_ID, JSON.stringify(cacheItem));

            return retObj;
        } else {
            throw new Error("Failed to connect to API due to " + resp.message);
        }
    } catch (e) {
        if (e instanceof Error) throw new Error("Unable to get User's Profile caused by: " + e.message + e.stack)
        throw new Error("Unable to get User's Profile");
    }
}