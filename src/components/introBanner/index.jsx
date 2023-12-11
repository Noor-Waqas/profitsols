import React from 'react'
import style from './style.module.scss'
import { Button } from 'antd'

const index = () => {
  
  return (
    <div>
      <div style={{display:"flex",justifyContent:"center"}}>
              <div className={style.bannerDiv}>
                <div style={{display:"flex"}} className={style.testHeadingDiv}>
                  <div className={style.testParagraphDiv}>
                    <h1>Bringing your vision to life with world class software development</h1>
                    <p>We provide quality service with proven results</p>
                    <Button className={style.LetTalkButton}>Let's Talk</Button>
                  </div>
                  <div className={style.testImghDiv}><img src="https://profitsols.com/wp-content/uploads/2023/07/home-page-banner-image.png" alt="" /></div>

                </div>

              </div>
      </div>
    </div>
  )
}

export default index