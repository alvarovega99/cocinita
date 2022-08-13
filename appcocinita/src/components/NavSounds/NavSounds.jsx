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
            <a href='https://api.whatsapp.com/send/?phone=17866303437&text=Hello!%20Welcome%20to%20The%20Cocinita!%F0%9F%8D%94' target='_blank' rel="noreferrer">
              <h1>+1 (786) 630-3437</h1>
            </a>
          </div> : null
          }
        </div>

          <div className={style.button}>
            {
              ruta === home ?
              <div className={style.insideButton}>
              <a href='https://open.spotify.com/user/31ani3gpy7lquo5dt2yrifkbcglu?si=d99d5974524b4468' target='_blank' rel="noreferrer">
                
                  <img src={spotify} alt='' />
                
              </a> </div>: 
              <Link to='/' className={style.insideButton}>
                <div className={style.insideButton}>
                  <img src={homeLogo} alt='' />
                </div>
              </Link>
            }
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
