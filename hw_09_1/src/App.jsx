import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import HomePage from './components/Articles/HomePage';
import DriftPage from './components/Articles/DriftPage';
import TimeAttackPage from './components/Articles/TimeAttackPage';
import ForzaPage from './components/Articles/ForzaPage';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Menu />
        <main className="App-page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;