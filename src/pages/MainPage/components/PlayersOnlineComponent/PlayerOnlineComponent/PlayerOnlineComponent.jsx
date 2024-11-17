import "./PlayerOnlineComponent.css"
import {Link} from "react-router-dom";

export function PlayerOnlineComponent(props) {
    const { name, details } = props.playerInfo;
    const health = details.health / 2;
    const foodLevel = details.food_level / 2;

    const renderHearts = () => {
        const hearts = [];
        for (let i = 1; i <= 10; i++) {
            if (i <= health) {
                hearts.push('❤️');
            } else if (i - 0.5 === health) {
                hearts.push('💔');
            } else {
                hearts.push('🤍');
            }
        }
        return hearts;
    };

    const renderHunger = () => {
        const hungerIcons = [];
        for (let i = 1; i <= 10; i++) {
            if (i <= foodLevel) {
                hungerIcons.push('🍗');
            } else if (i - 0.5 === foodLevel) {
                hungerIcons.push('🍞');
            } else {
                hungerIcons.push('⚪');
            }
        }
        return hungerIcons;
    };

    return (
        <div className="player-card d-flex align-items-center">
            <i className="fas fa-user fa-2x me-3"></i>
            <div className="player-details">
                <div>
                    <Link to={`/player/${name}`}>
                        <strong>{name}</strong>
                    </Link>
                </div>
                <div>
                    Здоровье: <span className="health-icons">{renderHearts().join(' ')}</span>
                </div>
                <div>
                    Сытость: <span className="hunger-icons">{renderHunger().join(' ')}</span>
                </div>
                <div>
                    Уровень: <span>{details.experience}</span>
                </div>
            </div>
        </div>
    );
}