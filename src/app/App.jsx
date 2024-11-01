import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import './App.css';
import {MainPage} from "../pages/MainPage/MainPage.jsx";
import {PlayersPage} from "../pages/PlayersPage/PlayersPage.jsx";
import {PlayerDetailsPage} from "../pages/PlayerDetailsPage/PlayerDetailsPage.jsx";
import {ServerStatsComponent} from "../pages/MainPage/components/ServerStatsComponent/ServerStatsComponent.jsx";

const App = () => {
    return (
        <Router>
            <div className="container py-4">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/players" element={<PlayersPage />} />
                    <Route path="/player/:playerId" element={<PlayerDetailsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

const Header = () => {
    const location = useLocation();

    return (
        <div className="text-center mb-4">
            <h1 className="page-title">{document.title}</h1>
            <nav className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Главная</Link>
                <Link to="/players" className={location.pathname === '/players' ? 'active' : ''}>Игроки</Link>
            </nav>
            <ServerStatsComponent/>
        </div>
    );
};

export default App;
