import React from 'react'
import style from '../NavSounds/NavSounds.module.css'
import { Link } from 'react-router-dom'
import hambuguesa from '../../assets/burger.webp'

const NavSounds = () => {

    const home = '/'
    const ruta = window.location.pathname

  return (
    <div className={style.container}>
      <div className={style.contNav}>
      <div className={style.button}>
        <div className={style.insideButton}>

        </div>
      </div>

        <div className={style.contTitle}>
          <Link to='/'>
          <div className={style.logo}>
              logo
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