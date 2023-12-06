import {REWARDS_LOGIN_TOKEN_ID, DEFAULT_REWARDS_LOGIN_TOKEN} from '@app/api/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fanmakerGetRequest, fanmakerPostRequest } from './fanmakerAPIRequest';

export async function isLoggedIn(): Promise<boolean> {

    try {
        const token = await AsyncStorage.getItem(REWARDS_LOGIN_TOKEN_ID);
        if (token !== null) {
            let props = await fanmakerGetRequest("http://api.fanmaker.com/api/v2/profile", token);
            if (props.code >= 200 && props.code < 400) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (e) {
        console.error("Error trying to determine if the user is logged in" + e);
        return false;
    }
}

type LoginProps = {
    success: boolean;
    errorMessage?: string;
}

export async function loginUser (username: string, password: string): Promise<LoginProps> {
        try {
            const uri = "http://api.fanmaker.com/api/v2/auth?" + new URLSearchParams({
                "username": username,
                "password": password
            }).toString();

            //yes this needs to be a post request, even though it says get request on the API.
            //no it doesn't let you put the login info in the body of the post request
            //tootsie_pop_world_may_never_know.mp3
            let resp = await fanmakerPostRequest(uri, DEFAULT_REWARDS_LOGIN_TOKEN, "");

            if (resp.code >= 200 && resp.code < 400) {
                AsyncStorage.setItem(REWARDS_LOGIN_TOKEN_ID, resp.data?.token);
                return {success: true};
            } else {
                return {success: false, errorMessage: resp.code.toString() + ": " + resp.message}
            }
        } catch (e) {
            if (e instanceof Error) return {success: false, errorMessage: e.name + ": " + e.message};
            else return {success: false};
        }
}

export async function logoutUser() {
    await AsyncStorage.removeItem(REWARDS_LOGIN_TOKEN_ID);
    //todo something else?
}