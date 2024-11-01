import './MainPage.css';
import {ServerIpComponent} from "./components/ServerIpComponent/ServerIpComponent.jsx";
import {PlayersOnlineComponent} from "./components/PlayersOnlineComponent/PlayersOnlineComponent.jsx";
import {LastEventsComponent} from "./components/LastEventsComponent/LastEventsComponent.jsx";

export function MainPage() {
    return (
        <>
            <ServerIpComponent/>
            <PlayersOnlineComponent/>
            <LastEventsComponent/>
        </>
    )
}