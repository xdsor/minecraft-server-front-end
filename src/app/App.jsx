import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import {MainPage} from "../pages/MainPage/MainPage.jsx";
import {PlayersPage} from "../pages/PlayersPage/PlayersPage.jsx";
import {PlayerDetailsPage} from "../pages/PlayerDetailsPage/PlayerDetailsPage.jsx";
import {HeaderComponent} from "./components/HeaderComponent/HeaderComponent.jsx";
import {SHOW_MAP_FEATURE_TOGGLE} from "../common/constants.js";
import {MapPage} from "../pages/MapPage/MapPage.jsx";

const App = () => {
    return (
        <Router>
            <div className="container py-4">
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/players" element={<PlayersPage />} />
                    <Route path="/player/:playerId" element={<PlayerDetailsPage />} />
                    { SHOW_MAP_FEATURE_TOGGLE && <Route path="/map" element={<MapPage />} />}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
