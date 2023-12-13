import AsyncStorage from "@react-native-async-storage/async-storage";
import { fanmakerPostRequest } from "./fanmakerAPIRequest";
import { REWARDS_LOGIN_TOKEN_ID } from "../constants";


export async function rewardsChangePassword(current: string, new_pass: string, confim: string): Promise<boolean> {
    const body = JSON.stringify({
        "current_password": current,
        "new_password": new_pass,
        "new_password_confirmation": confim
    });

    try {
        const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);

        if (token == null) {
            throw new Error("Not signed in");
        }

        const resp = await fanmakerPostRequest("https://api.fanmaker.com/api/v2/change_password", token, body);

        if (resp.code >= 200 && resp.code < 400) {
            return true;
        } else {
            throw new Error(resp.message);
        }
    } catch (e) {
        if (e instanceof Error) throw new Error("Unable to chage password due to " + e.message);
        throw new Error("Unable to change password")
    }
}