import { loginUser } from "@app/api/features/rewardsLogin";
import { ClickablePanel } from "@app/components";
import { ScrollView } from "react-native";
import CookieManager from '@react-native-cookies/cookies';
import { getLeaderboard } from "@app/api/features/rewardsLeaderboard";
import { getProfileInfo } from "@app/api/features/getProfileInfo";
import { getPrizeList } from "@app/api/features/prizeActions";

const SMILEY = require('@app/assets/images/smiley-1.png');

export default function DevPage(): JSX.Element {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <ClickablePanel active={true} onPress={() => {
                loginUser("mineawesomeman@gmail.com", "bYP%OLcFA4id0eYI").then((out) => {
                    console.log(out);
                });
            }} imageSrc={SMILEY} text="login"/>
            <ClickablePanel active={true} onPress={() => {
                getProfileInfo({useCache: false}).catch((e) => console.error(e));
            }} imageSrc={SMILEY} text="userdata"/>
            <ClickablePanel active={true} onPress={() => {
                getLeaderboard({useCache: false}).then((out) => console.log(out)).catch((e) => console.error(e));
            }} imageSrc={SMILEY} text="leaderboard"/>
            <ClickablePanel active={true} onPress={() => {
                CookieManager.clearAll().then((a) => {console.log(a); console.log("no more cookies")});
            }} imageSrc={SMILEY} text="clear pastries"/>
            <ClickablePanel active={true} onPress={() => {
                getPrizeList({useCache: false}).then((a) => console.log(a))
            }} imageSrc={SMILEY} text="prizes"/>
        </ScrollView>

    )
}


