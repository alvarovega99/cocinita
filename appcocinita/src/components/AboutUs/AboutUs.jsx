import React from 'react'
import style from '../AboutUs/AboutUs.module.css'
import NavSounds from '../NavSounds/NavSounds'
import Footer from '../Footer/Footer'
import NavBottom from '../NavBottom/NavBottom'
import about from '../../assets/about.webp'

const AboutUs = ({ sonido, state }) => {
  return (
    <div className={style.container}>
      <NavSounds state={state} sonido={sonido} />
      <div className={style.button}>
        <div className={style.insideButton}>
          <div className={style.title}>
            <p>ABOUT US</p>
          </div>
          <div className={style.containerContent}>
            <div className={style.contImg}>
              <img src={about} alt='' />
            </div>
            <div className={style.containerText}>
            <p>
                    Cocinita is spanish  word for ‘little-kitchen’, and that’s where we begun.<br/>

                    The Cocinita began taking orders in our apartment kitchen, then it became a<br/>
                    food-truck in 2018, and now is a restaurant with one goal: serve food that <br/>
                    makes you feel great.<br/><br/>

                    Sure, we love our greens, but we want both vegans and non, to react the<br/>
                    same way to our food: <strong>‘SOOOO GOOOD’</strong><br/><br/>

                    LET’S FACE IT<br/><br/>

                    We all need comfort food. To lift our mood, to celebrate big or small <br/>
                    achievements, or when the scary sunday  hits.<br/><br/>
                    Sometimes you. just. deserve. something. good.<br/><br/>
                    But... is it really comfort food when it harms others?<br/>
                    Is it really comfort food if it leaves you feeling heavy? <br/>
                    Where is the comfort after all?<br/><br/>
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
        <NavBottom />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs