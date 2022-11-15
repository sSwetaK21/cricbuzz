// import logo from './logo.svg';
import Navbar from './components/HeaderComponents/Navbar'
import Sidebar from './components/HeaderComponents/Sidebar'
import { Series } from './components/BodyComponents/Series'
import BasicCard from './components/BodyComponents/BasicCard';
import './App.css';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Sidebar />
      {/* <Series /> */}
      {/* <BasicCard /> */}
    </div>
  );
}

export default App;
