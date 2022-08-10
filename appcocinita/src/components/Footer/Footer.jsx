import React from 'react'
import style from '../Footer/Footer.module.css'
import axios from 'axios'



const Footer = () => {
  //get data view from server
  const getData = async () => {
    console.log('get data')
    const response = await axios.get('http://localhost:4500/session')
    return response.data
  }
  const [data, setData] = React.useState(0)

  React.useEffect(() => {
    getData().then(dataApi => {
      setData(dataApi)
    })
  } , [])
  return (
    <div className={style.container}>
        <div className={style.buttonTop}>
            <p>${data}</p>
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