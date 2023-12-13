import { DEFAULT_REWARDS_LOGIN_TOKEN } from "../constants";
import { fanmakerPostRequest } from "./fanmakerAPIRequest";

export async function rewardsForgotPassword(email: string): Promise<boolean> {
    const body = JSON.stringify({
        email
    });
    try {
        const resp = await fanmakerPostRequest("https://api.fanmaker.com/api/v2/recover_account", DEFAULT_REWARDS_LOGIN_TOKEN, body);

        if (resp.code >= 200 && resp.code < 400) {
            return true;
        } else {
            throw new Error(resp.message);
        }
    } catch (e) {
        if (e instanceof Error) throw new Error("Unable to initiate account recovery due to " + e.message);
        throw new Error("Unable to initiate account recovery");
    }

}