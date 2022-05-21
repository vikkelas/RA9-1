import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import DriftPage from "./Components/DriftPage";
import ForzaPage from "./Components/ForzaPage";
import TimeAttackPage from "./Components/TimeAttackPage";
import Menu from "./Components/Menu";

function App() {
  return (
      <div className="page">
          <Menu/>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/drift" element={<DriftPage/>} />
              <Route path="/timeattack" element={<TimeAttackPage/>} />
              <Route path="/forza" element={<ForzaPage/>} />
          </Routes>
      </div>
  );
}

export default App;
