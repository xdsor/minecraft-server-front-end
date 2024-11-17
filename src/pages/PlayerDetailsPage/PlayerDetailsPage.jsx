import {useParams} from "react-router-dom";
import {PlayerInfoCardComponent} from "./components/PlayerInfoCardComponent/PlayerInfoCardComponent.jsx";
import "./PlayerDetailsPage.css"
import {useGetPlayerStatsQuery} from "../../services/stats.js";


export function PlayerDetailsPage() {
    const {playerId} = useParams();
    const { data: stats, isLoading } = useGetPlayerStatsQuery(playerId);


    if (isLoading) return <div>Loading...</div>;
    return (
        <div>
            <h1 className="mb-4 text-center">Инфо об игроке <strong className="player-name">{playerId}</strong></h1>
            <div className="player-info">
                {stats.map((item, index) => (
                    <PlayerInfoCardComponent title={item.title} stats={item.stats} key={index} />
                ))}
            </div>
        </div>
    )
}