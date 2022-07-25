import React from 'react'
import style from '../Footer/Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
        <div className={style.buttonTop}>
            <p>00000020302</p>
            <p>VISITS FROM FRIENDS</p>
        </div>
        <div className={style.bottomText}>
            <p>PLEASE NOTE OUR FOOD MAY CONTAIN AND/OR SHARE EQUIPMENT WITH SOY, WHEAT, AND NUTS.<br/>GET MORE INFORMATION ON IMPOSSIBLE FOODS.</p>
            <p>COPYRIGHT © 2022 THE COCINITA</p>
        </div>
    </div>
  )
}

export default Footer