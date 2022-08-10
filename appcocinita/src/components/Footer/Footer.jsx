import React from 'react'
import style from '../Footer/Footer.module.css'
import axios from 'axios'



const Footer = () => {
  //get data view from server
  const getData = async () => {
    console.log('get data')
    return await axios.get('http://localhost:4500/views/increment')
  }
  const [data, setData] = React.useState(0)

  React.useEffect(() => {
    if (data === 0) {
      getData().then(res => {
        setData(res.data.views)
      })
    }

  } , [data])
  return (
    <div className={style.container}>
        <div className={style.buttonTop}>
            <p>00000000000{data}</p>
            <p>VISITS FROM FRIENDS</p>
        </div>
        <div className={data}>
            <p>PLEASE NOTE OUR FOOD MAY CONTAIN AND/OR SHARE EQUIPMENT WITH SOY, WHEAT, AND NUTS.<br/>GET MORE INFORMATION ON IMPOSSIBLE FOODS.</p>
            <p>COPYRIGHT © 2022 THE COCINITA</p>
        </div>
    </div>
  )
}

export default Footer