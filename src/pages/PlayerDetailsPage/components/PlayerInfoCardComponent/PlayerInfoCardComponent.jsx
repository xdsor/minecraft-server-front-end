import PropTypes from "prop-types";
import "./PlayerInfoCardComponent.css"
import {useState} from "react";

const SHOW_LIMIT = 6;

export function PlayerInfoCardComponent({title, stats}) {
    const sortedStats = [...stats].sort((a, b) => b[1] - a[1]);
    const [showAll, setShowAll] = useState(false);
    const [statsToDisplay, setStatsToDisplay] = useState(sortedStats.slice(0, SHOW_LIMIT));
    const isThereMoreToShow = sortedStats.length > SHOW_LIMIT;

    const handleShowAll = () => {
        setShowAll(!showAll)
        if (!showAll) {
            setStatsToDisplay(sortedStats)
        } else {
            setStatsToDisplay(sortedStats.slice(0, SHOW_LIMIT));
        }
    }

    return (
        <div className="player-info-block" onClick={handleShowAll}>
            <h3 className="text-center">{title}</h3>
            <ul className="list-group list-group-flush">
                {statsToDisplay.map((stat, index) => {
                    return (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div>
                                <strong>{stat[0]}:</strong>
                            </div>
                            <div>
                                {stat[1]}
                            </div>
                        </li>)
                })}
            </ul>
            {isThereMoreToShow ?
                <button className="btn btn-link" onClick={handleShowAll}>
                    { showAll ? "Скрыть дополнительные" : `Показать ещё ${sortedStats.length - SHOW_LIMIT}` }
                </button>
                : null}
        </div>
    )
}

PlayerInfoCardComponent.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.array),
}