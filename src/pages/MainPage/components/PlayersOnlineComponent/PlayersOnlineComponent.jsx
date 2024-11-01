import "./PlayersOnlineComponent.css"
import {PlayerOnlineComponent} from "./PlayerOnlineComponent/PlayerOnlineComponent.jsx";
import {useGetOnlinePlayersQuery} from "../../../../services/players.js";

export function PlayersOnlineComponent() {
    const { data, error, isLoading, refetch } = useGetOnlinePlayersQuery(undefined, {
        pollingInterval: 30000,
        skipPollingIfUnfocused: true,
    })
    return (
        <>
            {isLoading ? (<h1>Загрузка</h1>) :
                error ? (<h1>Error</h1>) :
                    <div className="text-center mb-4">
                        <div className="card text-light">
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-baseline">
                                    <h5 className="players-online">
                                        Игроков онлайн: <span
                                            id="player-count">{data['online_count']} из {data['max_players']}</span>
                                    </h5>
                                    <button onClick={refetch} className="btn btn-link refresh-button d-flex align-items-center">
                                        <i className="fas fa-sync-alt me-2"></i> Обновить
                                    </button>
                                </div>
                                <div className="player-list mt-3">
                                    {data['online_count'] > 0 ? (<>
                                        {
                                            data['players'].map((player) => <PlayerOnlineComponent playerInfo={player}
                                                                                                   key={player.id}/>)
                                        }
                                    </>) : (<h3>Никто не играет :(</h3>)}
                                </div>
                            </div>
                        </div>
                    </div>}
        </>

    )
}