import './App.css';
import React from 'react'
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import AboutUs from './components/AboutUs/AboutUs';
import {Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import musica from './assets/musica.wav'
import axios from 'axios'

function App() {
  const defaultApi = process.env.REACT_APP_DEFAULT_API

  const [state, setState] = useState(false)

  const sonido = () => {
    if (state === true){
      setState(false)
    } else {
      setState(true)
    }
  }
  const getData = async () => {
    console.log('get data')
    return await axios.get(`${defaultApi}/views/increment`)
  }
  React.useEffect(() => {
      getData()
  } ,[])
  
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
