import React from 'react'
import style from '../NavBottom/NavBottom.module.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.webp'
import instagram from '../../assets/instagram.webp'
import whatsapp from '../../assets/whatsapp.webp'
import spotifyazul from '../../assets/spotifyazul.webp'

const NavBottom = () => {

    const home = '/'
    const ruta = window.location.pathname

  return (
    <div className={style.container}>
        { ruta === home ?
        <div className={style.containerButtons}>
            <Link to='/location'>
            <div className={style.button}>
            <div className={style.insideButton}>
                <p>Location</p>
            </div>
            </div>
            </Link>

            <a href='https://www.thecocinitamiami.getsauce.com/order-online' target='_blank' rel="noreferrer">
            <div className={style.button}>
            <div className={style.insideButton}>
                <p>Order</p>
            </div>
            </div>
            </a>

            <Link to='/about'>
            <div className={style.button}>
            <div className={style.insideButton}>
                <p>About us</p>
            </div>
            </div>
            </Link>
        </div> : null
        }   

            <div className={style.containerButtonsBottom}>

                <div id={style.buttonSpotify} className={style.button}>
                <div className={style.insideButton}>
                    <img src={spotifyazul} alt='' />
                </div>
                </div>

                <div className={style.button}>
                <a className={style.insideButton} href='https://www.facebook.com/thecocinitamiami' target='_blank' rel="noreferrer">    
                    <img src={facebook} alt='' />
                </a>
                </div>

                <div className={style.button}>
                <a className={style.insideButton} href='https://www.instagram.com/thecocinitamiami' target='_blank' rel="noreferrer">
                    <img src={instagram} alt='' />
                </a>
                </div>

                <div className={style.button}>
                <a className={style.insideButton} href='https://api.whatsapp.com/send/?phone=17866303437&text=Hola+vengo+desde+la+web+&#127828;&type=phone_number&app_absent=0' target='_blank' rel="noreferrer">
                    <img src={whatsapp} alt='' />
                </a>
                </div>

            </div>
            {ruta === home ?
            <div className={style.footer}>
                <Footer/>
            </div> : null
            }
    </div>
    
  )
}

export default NavBottom