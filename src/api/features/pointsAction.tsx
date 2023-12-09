import AsyncStorage from "@react-native-async-storage/async-storage";
import { fanmakerGetRequest, fanmakerPostRequest } from "./fanmakerAPIRequest";
import { REWARDS_LOGIN_TOKEN_ID, REWARDS_POINTS_CACHE_ID } from "../constants";
import { isLoggedIn } from "./rewardsLogin";
import { checkStale, newStaleTime } from "../cache/checkStale";
import { CachedAPICallProps } from "../model/types";

const avaliblePointsRegExp = new RegExp('(?:<strong>)?([0-9]+)(?:<\/strong>)?');

export async function getAvaliblePoints({useCache = true}: CachedAPICallProps): Promise<number> {
    try {
        if (useCache) {
            const pointsCache = await AsyncStorage.getItem(REWARDS_POINTS_CACHE_ID);

            if (pointsCache !== null) {
                const pointsObj = JSON.parse(pointsCache);
                if (!checkStale(pointsObj.staleDate)) {
                    return pointsObj.points;
                }
            }
        }

        const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);
        if (token === null) {
            throw new Error("User not logged In");
        }

        const resp = await fanmakerGetRequest("https://api.fanmaker.com/api/v2/profile/point_totals", token);
        if (resp.code >= 200 && resp.code < 400) {
            const data = resp.data;
            for (let i = 0; i < data.length; i ++) {
                if (data[i].label == 'Available') {
                    const nums = avaliblePointsRegExp.exec(data[i].value);
                    if (nums === null || nums[1] === undefined) {
                        throw new Error("Unexpected value in avalible points: " + data[i].value);
                    } else {
                        const points = parseInt(nums[1]);
                        const cacheObj = {
                            points: points,
                            staleDate: newStaleTime({hours:1}) //cache goes stale after 1 hour
                        }
                        AsyncStorage.setItem(REWARDS_POINTS_CACHE_ID, JSON.stringify(cacheObj));
                        return points;
                    }
                }
            }
            throw new Error("Did not find Avalible Balance in " + data);
        } else {
            throw new Error("Failed to connect to API due to " + resp.message);
        }
    } catch (e) {
        if (e instanceof Error) throw new Error("Unable to get User's Points caused by: " + e.message + e.stack)
        throw new Error("Unable to get User's Points");
    }
}

type RedemtionResp = {
    success: boolean,
    message: string
}

export async function redeemCode(code: string): Promise<RedemtionResp> {
    const uri = "https://api.fanmaker.com/api/v2/promo_codes?code=" + code

    try {
        const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);
        if (token === null) {
            throw new Error("User not logged In");
        }

        const resp = await fanmakerPostRequest(uri, token, "");

        if (resp.code === 400) {
            return {
                success: false,
                message: resp.message ? resp.message : ""
            }
        } else if (resp.code === 200) {
            getAvaliblePoints({useCache: false}); //manually update points cache
            return {
                success: true,
                message: resp.data?.message ? resp.data.message : ""
            }
        } else {
            throw new Error("Weird error when connecting to FanMaker" + resp.code + resp.message);
        }
    } catch (e) {
        if (e instanceof Error) {
            throw new Error("Unable to connect to FanMaker caused by: " + e.message + e.stack)
        } else {
            throw new Error("Unable to connect to FanMaker")
        }
    } 

}