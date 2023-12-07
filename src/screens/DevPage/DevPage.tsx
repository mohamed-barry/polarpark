import { loginUser } from "@app/api/features/rewardsLogin";
import { ClickablePanel } from "@app/components";
import { ScrollView } from "react-native";

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
                fetch("https://api.fanmaker.com/docs/v2.html").then((out) => out.text()).then((data) => console.log(data)).catch((e) => console.error(e));
            }} imageSrc={SMILEY} text="test con"/>
            <ClickablePanel active={true} onPress={() => {
                fetch(
                    "https://api.fanmaker.com/api/v2/auth?" + new URLSearchParams({
                            "username": "mineawesomeman@gmail.com",
                            "password": "bYP%OLcFA4id0eYI"
                        }).toString()
                    ,
                    {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-Fanmaker-Token': '7b76094971f49d6c755d3f471d261e5298370788f8f4d4ecef0911b429698804'
                        },
                        method: "POST",
                        body: ""
                    }
                
                ).then((out) => out.text()).then((data) => console.log(data)).catch((e) => console.error(e));
            }} imageSrc={SMILEY} text="fake login"/>
        </ScrollView>

    )
}


