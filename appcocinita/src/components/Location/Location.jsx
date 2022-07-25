import React from 'react'
import style from '../Location/Location.module.css'
import NavSounds from '../NavSounds/NavSounds'
import NavBottom from '../NavBottom/NavBottom'
import Footer from '../Footer/Footer'

const Location = () => {
  return (
    <div className={style.container}>
      <NavSounds/>
      <div className={style.button}>
            <div className={style.insideButton}>

                <div className={style.title}>
                    <p>LOCATION</p>
                </div>

                <div className={style.containerContent}>

                  <div className={style.contMaps}>
           
                  </div>
                  <div className={style.containerText}>
                    <p>
                      OPENING HOURS:<br/>
                      SUNDAY - WEDNESDAY: 10AM–11PM<br/>
                      THURSDAY: 10AM–12AM<br/>
                      FRIDAY - SATURDAY: 10AM–12:30AM<br/>
                    </p>
                    <p>
                    70 SE 5TH ST SUITE 107, MIAMI, FL 33131<br/>
                    786-630-3437
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

export default Location