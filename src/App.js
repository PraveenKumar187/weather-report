import logo from './logo.svg';
import './App.css';
import Homeweather from './Component/Homeweather';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Homeweather/>
    </div>
  );
}

export default App;
