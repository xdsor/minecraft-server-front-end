import {useGetServerTimeQuery} from "../../../../services/stats.js";
import "./ServerStatsComponent.css"

export function ServerStatsComponent() {
    const {data} = useGetServerTimeQuery(undefined, {
        pollingInterval: 60000,
        skipPollingIfUnfocused: true,
    })
    if (data) {
        displayMinecraftTime(data)
    }
    return (<div className="game-stats mb-4 text-center">
        { data && displayMinecraftTime(data)}
    </div>)
}

function displayMinecraftTime(data) {
    const daytime = data.daytime;
    const gameTime = data.game_time;

    let partOfDay, enemyStatus, isEnemiesSpawn, dayTimeColor;

    if (0 <= daytime && daytime < 6000) {
        partOfDay = "Утречко 🌅";
        enemyStatus = "Злых монстров нет 🕊️";
        isEnemiesSpawn = false;
        dayTimeColor = "#ADD8E6";
    } else if (6000 <= daytime && daytime < 12000) {
        partOfDay = "День ☀️";
        enemyStatus = "Врагов нет 🕊️";
        isEnemiesSpawn = false;
        dayTimeColor = "#FFD700"
    } else if (12000 <= daytime && daytime < 13000) {
        partOfDay = "Вечер 🌇";
        enemyStatus = "Врагов нет, но скоро будут 🕊️";
        isEnemiesSpawn = false;
        dayTimeColor = "#FFB6C1"
    } else if (13000 <= daytime && daytime < 18000) {
        partOfDay = "Ночь 🌌";
        enemyStatus = "Зондбэ вылезают из могил 🧟";
        isEnemiesSpawn = true;
        dayTimeColor = "#DC143C"
    } else if (18000 <= daytime && daytime < 22000) {
        partOfDay = "Полночь 🌙";
        enemyStatus = "Повсюду бродят злые зондбэ 🧟";
        isEnemiesSpawn = true;
        dayTimeColor = "#4169E1"
    } else {
        partOfDay = "Восход солнца 🌄";
        enemyStatus = "Солнце уже восходит, но зондбэ еще ходят 🧟️";
        isEnemiesSpawn = true;
        dayTimeColor = "#FFA07A";
    }

    const gameTimeHours = Math.floor(gameTime / (20 * 60 * 60));
    const gameTimeMinutes = Math.floor((gameTime / (20 * 60)) % 60);
    const cumulativeTime = `${gameTimeHours}ч ${gameTimeMinutes}м`;


    return (<div>
        <p>
            На сервере <span style={{color: dayTimeColor}}>{partOfDay}</span> <span
            style={{color: isEnemiesSpawn ? "#FF6B6B" : "#A8E6CF"}}>{enemyStatus}</span>
            <span> Наиграно <strong>{cumulativeTime}</strong>.</span>
        </p>
    </div>)
}