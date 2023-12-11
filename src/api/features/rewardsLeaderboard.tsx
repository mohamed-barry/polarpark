import AsyncStorage from "@react-native-async-storage/async-storage";
import { DEFAULT_REWARDS_LOGIN_TOKEN, REWARDS_LEADERBOARD_CACHE_ID } from "../constants";
import { CachedAPICallProps } from "../model/types";
import { fanmakerGetRequest } from "./fanmakerAPIRequest";
import { checkStale, newStaleTime } from "../cache/checkStale";


export type LeaderboardEntry = {
    id: number;
    name: string;
    points: number;
}

export async function getLeaderboard({useCache = true}: CachedAPICallProps): Promise<Array<LeaderboardEntry>> {
    try {
        if (useCache) {
            const cache = await AsyncStorage.getItem(REWARDS_LEADERBOARD_CACHE_ID);
            if (cache !== null) {
                const cacheObj = JSON.parse(cache);
                if (!checkStale(cacheObj.staleDate)) {
                    return cacheObj.userList;
                }
            }
        }

        const resp = await fanmakerGetRequest("https://api.fanmaker.com/api/v2/leaderboards/229", DEFAULT_REWARDS_LOGIN_TOKEN);
        if (resp.code >= 200 && resp.code < 400) {
            let userList = [];
            for (let i = 0; i < 10; i++) { //gets the top 10 users
                const currEntry = {
                    name: resp.data.users[i].full_name,
                    points: resp.data.users[i].display_points,
                    id: i+1
                }
                userList.push(currEntry);
            }
            const finalCacheObj = {
                userList: userList,
                staleDate: newStaleTime({days: 3})
            }
            AsyncStorage.setItem(REWARDS_LEADERBOARD_CACHE_ID, JSON.stringify(finalCacheObj));
            return userList;
        } else {
            throw new Error("Unable to connect to leaderboard due to " + resp.message);
        }
        
    } catch (e) {
        if (e instanceof Error) throw new Error("Error trying to get leaderboard caused by: " + e.message);
        else throw new Error("Error trying to get leaderboard of unknown cause.");
    }
}