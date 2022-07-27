import React from 'react'
import style from '../Home/Home.module.css'
import NavSounds from '../NavSounds/NavSounds'
import NavBottom from '../NavBottom/NavBottom'

const Home = ({sonido, state}) => {
  return (
    <div className={style.container}>
        <NavSounds state={state} sonido={sonido}/>
        <NavBottom/>
    </div>
  )
}

export default Home