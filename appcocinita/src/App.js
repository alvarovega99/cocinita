import './App.css';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import AboutUs from './components/AboutUs/AboutUs';
import {Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import musica from './assets/musica.wav'

function App() {

  const [state, setState] = useState(true)

  const sonido = () => {
    if (state === true){
      setState(false)
    } else {
      setState(true)
    }
  }
  
  return (
    <div className="App">
         {state === true ?
          <audio preload='auto' autoPlay loop>
            <source src={musica} type="audio/wav"/>
            Tu navegador no soporta el tag audio
          </audio> :
          null
          }
      <Routes>
        <Route path='/' element={<Home state={state} sonido={sonido}/>}/>
        <Route exact path='/location' element={<Location state={state} sonido={sonido}/>}/>
        <Route path='/about' element={<AboutUs state={state} sonido={sonido}/>}/>
      </Routes>
    </div>
  );
}

export default App;
