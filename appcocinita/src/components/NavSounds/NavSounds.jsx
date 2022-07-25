import React, {useState} from 'react'
import style from '../NavSounds/NavSounds.module.css'
import { Link } from 'react-router-dom'
import hambuguesa from '../../assets/burger.webp'
import logoCocinita from '../../assets/logoCocinita.webp'
import homeLogo from '../../assets/home.webp' 
import spotify from '../../assets/spotify.webp'
import volumen from '../../assets/volumen.webp'
import musica from '../../assets/musica.wav'

const NavSounds = () => {

  const [state, setState] = useState(true)

    const home = '/'
    const ruta = window.location.pathname

    const sonido = () => {
      if (state === true){
        setState(false)
      } else {
        setState(true)
      }
    }

  return (
    <div className={style.container}>
      <div className={style.contNav}>
      <div className={style.button}>
        <div onClick={() => sonido(false)} className={style.insideButton}>
          <img src={volumen} alt='' className={`${state === false ? style.desactivado : ''}`}/>
          {state === true ?
          <audio autoPlay loop>
            <source src={musica} type="audio/wav"/>
            Tu navegador no soporta el tag audio
          </audio> :
          null
          }
        </div>
      </div>

        <div className={style.contTitle}>
          <Link to='/'>
          <div className={style.logo}>
              <img src={logoCocinita} alt='' />
          </div>
          </Link>
          {
            ruta === home ?
          <div className={style.text}>
            <h1>796-630-2437</h1>
          </div> : null
          }
        </div>

          <div className={style.button}>
            <div className={style.insideButton}>
              { ruta === home ?
                <img src={spotify} alt='' /> :
                <Link to='/'>
                <img src={homeLogo} alt='' />
                </Link>
              }
            </div>
          </div>
      </div>
      {
      ruta === home ? 
      <div className={style.contBurger}>
        <img src={hambuguesa} alt=''/>
        <p>“MR MITRANO BURGER”</p>
      </div> 
      : 
      null
      }
    </div>
  )
}

export default NavSounds