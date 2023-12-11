import React from 'react'
import style from './style.module.scss'
import { Button } from 'antd'


const navBar = () => {
  return (
    <div>
      <div className={style.mainLogo}>
        <div style={{marginTop:"35px"}}><img src="https://profitsols.com/wp-content/uploads/2023/07/LOGO.png" alt="" /></div>
        <div>
          <div style={{display:"flex"}}>
              <div className={style.iconDiv}> 
                <img src="https://profitsols.com/wp-content/uploads/2023/07/services.png" alt="" />
                <ul><li><a href="">Servise</a></li></ul>
              </div>
                <div className={style.iconDiv}> 
                  <img src="https://profitsols.com/wp-content/uploads/2023/07/portfolio.png" alt="" />
                  <ul><li><a href="">Protfolio</a></li></ul>
                </div>
                <div className={style.iconDiv}> 
                  <img src="https://profitsols.com/wp-content/uploads/2023/07/company.png" alt="" />
                  <ul><li><a href="">Company</a></li></ul>
                </div>
                <div className={style.iconDiv}> 
                  <img src="https://profitsols.com/wp-content/uploads/2023/07/contact.png" alt="" />
                  <ul><li><a href="">Contect</a></li></ul>
                </div>
                <div className={style.iconDiv}> <Button className={style.iconDivButton}>Get a Quote</Button></div> 
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default navBar