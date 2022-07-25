import React from 'react'
import style from '../NavBottom/NavBottom.module.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const NavBottom = () => {
  return (
    <div className={style.container}>
        <div className={style.containerButtons}>
            <Link to='/location'>
            <div className={style.button}>
            <div className={style.insideButton}>
                <p>Location</p>
            </div>
            </div>
            </Link>


            <div className={style.button}>
            <div className={style.insideButton}>
                <p>Order</p>
            </div>
            </div>

            <Link to='/about'>
            <div className={style.button}>
            <div className={style.insideButton}>
                <p>About us</p>
            </div>
            </div>
            </Link>
        </div>
            <div className={style.containerButtonsBottom}>
                
            <div className={style.button}>
            <div className={style.insideButton}>
            1
            </div>
            </div>

            <div className={style.button}>
            <div className={style.insideButton}>
            2
            </div>
            </div>

            <div className={style.button}>
            <div className={style.insideButton}>
            3
            </div>
            </div>

            <div id={style.buttonSpotify} className={style.button}>
            <div className={style.insideButton}>
            4
            </div>
            </div>

            </div>
            <div>
                <Footer/>
            </div>
    </div>
    
  )
}

export default NavBottom