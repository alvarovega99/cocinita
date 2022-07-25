import React from 'react'
import style from '../AboutUs/AboutUs.module.css'
import NavSounds from '../NavSounds/NavSounds'
import Footer from '../Footer/Footer'
import NavBottom from '../NavBottom/NavBottom'
import about from '../../assets/about.webp'

const AboutUs = () => {
  return (
    <div className={style.container}>
        <NavSounds/>
        <div className={style.button}>
            <div className={style.insideButton}>
                <div className={style.title}>
                    <p>ABOUT US</p>
                </div>
                <div className={style.containerContent}>
                  <div className={style.contImg}>
                    <img src={about} alt=''/>
                  </div>
                  <div className={style.containerText}>
                    <p>
                    Founded in 2020, The Cocinita was born with the idea of<br/>
                    showcasing vegan food as an alternative for Miami locals'<br/>
                    daily meals.<br/><br/>

                    Sure, we love our greens, but we want both vegans and<br/>
                    non, to react the same to our food: <strong>‘SOOOO GOOOD’</strong><br/><br/>

                    we all need comfort food. To lift our mood, to celebrate big or<br/>
                    small achievements, or when the sunday scaries hit.<br/>
                    Sometimes you. just. deserve. something. good.<br/>
                    But... is it really comfort food when it harms others? Is it really<br/>
                    comfort food if it leaves you feeling heavy? Where is the<br/>
                    comfort after all?<br/>
                    <strong>Comfort food has never been this good.</strong><br/>
                    For your mood.<br/>
                    For your gut.<br/>
                    For the planet.
                    </p>
                  </div>

                </div>
            </div>

        </div>
        <div className={style.navBottom}>
          <NavBottom/>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs