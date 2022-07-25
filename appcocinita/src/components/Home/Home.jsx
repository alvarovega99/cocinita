import React from 'react'
import style from '../Home/Home.module.css'
import NavSounds from '../NavSounds/NavSounds'
import NavBottom from '../NavBottom/NavBottom'

const Home = () => {
  return (
    <div className={style.container}>
        <NavSounds/>
        <NavBottom/>
    </div>
  )
}

export default Home