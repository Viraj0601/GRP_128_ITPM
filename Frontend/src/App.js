import logo from './logo.svg';
import './App.css';
import Menus from './Components/Menus';
import Menu2 from './Components/Menu2';
import EventsChallengePg from './Pages/EventsChallengePg';
import CreateEvents from './Pages/CreateEvents';
import AddEvents from './Pages/AddEvents';
import AllEvents from './Pages/AllEvents';
import AllChallenges from "./Pages/AllChallenges";
import Star from "./Pages/HoverRating";
import {BrowserRouter as Router, Switch, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/EventsChallengePg" element={<EventsChallengePg />} />
            <Route path="/AllEvents" element={<AllEvents />} />
            <Route path="/AllChallenges" element={<AllChallenges />} />
            <Route path="/Create/:id" element={<CreateEvents />} />
            <Route path="/Add" element={<AddEvents />} />
            <Route path="/st" element={<Star />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
