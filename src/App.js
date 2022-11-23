// import logo from './logo.svg';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/HeaderComponents/Navbar";
// import Sidebar from "./components/HeaderComponents/Sidebar";
// import Matches from "./components/BodyComponents/Matches/Matches";
import News from "./components/BodyComponents/Matches/News";
import NewsDeatail from "./components/BodyComponents/Matches/NewsDeatail";
import ABC from "./components/UserContext";

function App() {
  const [Id, setId] = useState([]);
  return (
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

    </div>
  );
}

export default App;
