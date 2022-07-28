import React from 'react'
import style from '../NavSounds/NavSounds.module.css'
import { Link } from 'react-router-dom'
import hambuguesa from '../../assets/burger.webp'
import logoCocinita from '../../assets/logoCocinita.webp'
import homeLogo from '../../assets/home.webp' 
import spotify from '../../assets/spotify.webp'
import volumen from '../../assets/volumen.webp'
/* import musica from '../../assets/musica.wav' */

const NavSounds = ({sonido, state}) => {

    const home = '/'
    const ruta = window.location.pathname

  return (
    <div className={style.container}>
      <div className={style.contNav}>
      <div className={style.button}>
        <div onClick={() => sonido(false)} className={style.insideButton}>
          <img src={volumen} alt='' className={`${state === false ? style.desactivado : ''}`}/>
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
            <h1>+1 (786) 630-3437</h1>
          </div> : null
          }
        </div>

          <div className={style.button}>
          <Link className={style.insideButton} to='/'>
              { ruta === home ?
                <img src={spotify} alt='' /> :
                <img src={homeLogo} alt='' />
              }
          </Link>
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
