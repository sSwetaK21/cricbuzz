// import logo from './logo.svg';
import './App.css';
import Navbar from './components/HeaderComponents/Navbar'
import Sidebar from './components/HeaderComponents/Sidebar'
import { Series } from './components/BodyComponents/Series'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Sidebar />
      <Series />
    </div>
  );
}

export default App;
