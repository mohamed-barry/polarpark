import AsyncStorage from "@react-native-async-storage/async-storage";
import { fanmakerGetRequest, fanmakerPostRequest } from "./fanmakerAPIRequest";
import { REWARDS_LOGIN_TOKEN_ID, REWARDS_STORE_CACHE_ID } from "../constants";
import { checkStale, newStaleTime } from "../cache/checkStale";
import { CachedAPICallProps } from "../model/types";

export type PrizeInfo = {
    id: number;
    images?: ImageLinks;
    inStock: boolean;
    pointsCost: number;
    title: string;
    subtitle?: string;
    description?: string;
    position: number;
}

type ImageLinks = {
    display?: string;
    thumb?: string;
    small?: string;
    medium?: string;
    large?: string;
}

export async function getPrizeList({useCache = true}: CachedAPICallProps): Promise<Array<PrizeInfo>> {
    try {
        if (useCache) {
            const cache = await AsyncStorage.getItem(REWARDS_STORE_CACHE_ID);
            if (cache !== null) {
                const cacheObj = JSON.parse(cache);
                if (!checkStale(cacheObj.staleDate)) {
                    return cacheObj.items;
                }
            }
        }

        const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);
        if (token === null) {
            throw new Error("User not logged In");
        }
        const resp = await fanmakerGetRequest("https://api.fanmaker.com/api/v2/store", token);
        if (resp.code >= 200 && resp.code < 400) {
            const items = resp.data.items;
            const sanitizedItems = [];
            for (let i = 0; i < items.length; i++) {
                const currItem = items[i];

                const sanitized = {
                    id: currItem.id,
                    title: currItem.title,
                    subtitle: currItem.subtitle,
                    description: currItem.description,
                    pointsCost: currItem.cost_points,
                    position: currItem.position,
                    inStock: currItem.in_stock,
                    images: currItem.images
                }
                sanitizedItems.push(sanitized);
            }
            const finalCacheObj = {
                items: sanitizedItems,
                staleDate: newStaleTime({days:3}) //cache goes stale 3 days after first load
            };
            AsyncStorage.setItem(REWARDS_STORE_CACHE_ID, JSON.stringify(finalCacheObj))
            return sanitizedItems;
        } else {
            throw new Error("Request Failed " + resp.code + " " + resp.message);
        }
    } catch (e) {
        if (e instanceof Error) throw new Error("Unable to get Prizes due to " + e.name + " " + e.message + "\n" + e.stack);
        throw new Error("Unable to get prizes");
    }
}

type PrizeResp = {
    success: boolean,
    message: string
}

export async function redeemPrize(prizeID: number): Promise<PrizeResp> {
    try {
        const uri = "https://api.fanmaker.com/api/v2/store/items/" + prizeID + "/order";
        const params = JSON.stringify({
            "item_id": prizeID,
            "delivery_method": "pickup"
        });

        const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);

        if (token == null) {
            throw new Error("User not signed in!");
        }

        const fet = await fetch(uri, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Fanmaker-Token': token
            },
            method: 'POST',
            body: params
        })
        
        const resp = await fet.json();

        if (resp.status !== undefined && resp.status >= 400) {
            return {
                success: false,
                message: resp.message
            }
        } else if (resp.users_order !== undefined) {
            return {
                success: true,
                message: resp.users_order.delivery_message
            }
        } else {
            console.log(resp);
            throw new Error("Unknown response: " + resp);
        }

    } catch (e) {
        console.error(e);
        if (e instanceof Error) throw new Error("Unable to redeem prize " + e.message);
        throw new Error("Unable to redeem prize");
    }
}

