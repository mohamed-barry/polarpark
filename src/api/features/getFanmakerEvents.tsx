import AsyncStorage from "@react-native-async-storage/async-storage";
import { CachedAPICallProps } from "../model/types";
import { fanmakerGetRequest } from "./fanmakerAPIRequest";
import { checkStale, newStaleTime } from "../cache/checkStale";
import { DEFAULT_REWARDS_LOGIN_TOKEN, REWARDS_EVENTS_CACHE_ID } from "../constants";
import { ImageURISource } from "react-native";

export type FMEvent = {
    name: string,
    descrpition: string,
    id: number,
    image: ImageURISource,
    date: Date
}

export async function getFanmakerEvents({useCache = true}: CachedAPICallProps): Promise<Array<FMEvent>> {
    try {
        if (useCache) {
            const cache = await AsyncStorage.getItem(REWARDS_EVENTS_CACHE_ID);
            if (cache !== null) {
                const cacheObj = JSON.parse(cache);
                if (!checkStale(cacheObj.staleDate)) {
                    return cacheObj.items;
                }
            }
        }

        const params = new URLSearchParams({
            "after": new Date().toISOString(),
            "per_page": "5"
        }).toString();

        const resp = await fanmakerGetRequest("https://api.fanmaker.com/api/v2/events?" + params, DEFAULT_REWARDS_LOGIN_TOKEN);

        if (resp.code >= 200 && resp.code < 400) {
            let events: Array<FMEvent> = [];
            const raw_events: Array<any> = resp.data;
            for (let i = 0; i < raw_events.length; i++) {
                events.push({
                    name: raw_events[i].event_name,
                    id: raw_events[i].id,
                    descrpition: "Attend for " + raw_events[i].points + " points!",
                    image: {uri: raw_events[i].banner_image},
                    date: new Date(raw_events[i].starts_at)
                })
            }

            const cacheItem = {
                items: events,
                staleDate: newStaleTime({days: 1})
            }

            AsyncStorage.setItem(REWARDS_EVENTS_CACHE_ID, JSON.stringify(cacheItem));

            return events;
        } else {
            throw new Error(resp.message);
        }

    } catch (e) {
        if (e instanceof Error) throw new Error("Unable to get events due to " + e.name + " " + e.message + "\n" + e.stack);
        throw new Error("Unable to get prizes");
    }
}
