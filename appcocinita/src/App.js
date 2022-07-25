import './App.css';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import AboutUs from './components/AboutUs/AboutUs';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
