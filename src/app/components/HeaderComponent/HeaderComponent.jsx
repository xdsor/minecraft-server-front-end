import {Link, useLocation} from "react-router-dom";
import {ServerStatsComponent} from "../../../pages/MainPage/components/ServerStatsComponent/ServerStatsComponent.jsx";
import {SHOW_MAP_FEATURE_TOGGLE} from "../../../common/constants.js";

export const HeaderComponent = () => {
    const location = useLocation();

    return (
        <div className="text-center mb-4">
            <h1 className="page-title">{document.title}</h1>
            <nav className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Главная</Link>
                <Link to="/players" className={location.pathname === '/players' ? 'active' : ''}>Игроки</Link>
                { SHOW_MAP_FEATURE_TOGGLE && <Link to="/map" className={location.pathname === '/map' ? 'active' : ''}>Карта</Link>}
            </nav>
            <ServerStatsComponent/>
        </div>
    );
};