import React from 'react'
import style from '../Footer/Footer.module.css'
import axios from 'axios'

const Footer = () => {
  const defaultApi = process.env.REACT_APP_DEFAULT_API
  //get data view from server
  const getData = async () => {
    console.log('get data')
    return await axios.get(`${defaultApi}/views`)
  }
  const [data, setData] = React.useState(0)


  React.useEffect(() => {
        getData().then(res => {
          console.log(res.data)
          setData(res.data[0].views -1)
        })
  } , [])

  return (
    <div className={style.container}>
        <div className={style.buttonTop}>
            <p>00000000000{data}</p>
            <p>VISITS FROM FRIENDS</p>
        </div>
        <div className={style.bottomText}>
            <p>COPYRIGHT © 2022 THE COCINITA</p>
        </div>
    </div>
  )
}

export default Footer
