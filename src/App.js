// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/HeaderComponents/Navbar";
// import Sidebar from "./components/HeaderComponents/Sidebar";
// import Matches from "./components/BodyComponents/Matches/Matches";
import News from "./components/BodyComponents/Matches/News";
import NewsDeatail from "./components/BodyComponents/Matches/NewsDeatail";
import ABC from "./components/UserContext";


import Stats from './components/BodyComponents/Stats';
import './App.css';
function App() {
  const [Id, setId] = useState([]);

  return(
    <div className="App">
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      {/* <Matches /> */}
      <ABC.Provider value={{ Id, setId }}>
        {/* <News />
        <NewsDeatail /> */}
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/NewsDetail" element={<NewsDeatail />} />
      </Routes>
      </ABC.Provider>

      <Sidebar />
      {/* <Series /> */}
      {/* <BasicCard /> */}
      <Stats />
    </div>
  );
}

export default App;
