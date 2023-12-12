import React from 'react'
import style from './style.module.scss'
import { Carousel } from 'antd';

const Profit_Sols_List = () => {
  // const onChange = (currentSlide:Number) => {
  //   console.log(currentSlide);
  // };
  return (
    <div>
      <div >
      <div><h1 className={style.textHeading}>ProfitSols is listed accoss top platforms</h1></div>
      <div>
      <Carousel autoplay>
    <div>
      <div className={style.contentStyle}>
      <div className={style.allIconDiv}>
        <div ><img src="https://profitsols.com/wp-content/uploads/2023/07/AGENCY-SPOTTER.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/SORLIST.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/CLUTCH.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/GOODFIRMS.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/CRUNCHBASE.png" alt="" /></div>
      </div>
      </div>
    </div>
    <div>
      <div className={style.contentStyle}>
      <div className={style.allIconDiv}>
        <div ><img src="https://profitsols.com/wp-content/uploads/2023/07/AGENCY-SPOTTER.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/SORLIST.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/CLUTCH.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/GOODFIRMS.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/CRUNCHBASE.png" alt="" /></div>
      </div>
      </div>

    </div>
    <div>
      <div className={style.contentStyle}>
      <div className={style.allIconDiv}>
        <div ><img src="https://profitsols.com/wp-content/uploads/2023/07/AGENCY-SPOTTER.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/SORLIST.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/CLUTCH.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/GOODFIRMS.png" alt="" /></div>
        <div><img src="https://profitsols.com/wp-content/uploads/2023/07/CRUNCHBASE.png" alt="" /></div>
      </div>
      </div>
    </div>
   
  </Carousel>
      </div>
    </div>
    </div>
  )
}

export default Profit_Sols_List