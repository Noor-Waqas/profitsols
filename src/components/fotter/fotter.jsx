import React from 'react'
import style from './style.module.scss'
import { Col, Row } from 'antd'
import {PhoneOutlined,MailOutlined,FacebookOutlined,WhatsAppOutlined,LinkedinOutlined,InstagramOutlined,BehanceOutlined} from '@ant-design/icons';

const fotter = () => {
  return (
    <div className={style.footerDiv}>
    <Row>
     <Col span={8}>
        <div>
         <h3 style={{marginLeft:"38px"}}>Services</h3>

            <ul>
                <li><a href="">Services</a></li>
                <li><a href="">Software Development</a> </li>
                <li><a href="">Mobile App Development</a></li>
                <li><a href="">Website Development</a></li>
                <li><a href="">Mobile App Development</a></li>
                <li><a href="">UI/UX Development</a></li>
            </ul>
        </div>
     </Col>
    <Col span={8}>
    <div>
        <h3 style={{marginLeft:"38px"}}>Links</h3>
            <ul>
                <li><a href="">About Us</a> </li>
                <li><a href="">About Us</a></li>
                <li><a href="">Our Portfolio</a></li>
                <li><a href="">Latest News</a></li>
                <li><a href="">Terms & Conditions</a></li>
            </ul>
        </div>
    </Col>
    <Col span={8}>
        <h3 style={{marginLeft:"10px"}}>
        Services
        </h3>
        <div style={{display:"flex",gap:"7px",fontSize:"20px"}}>
        <MailOutlined />
        <p> contact@profitsols.com</p>
        </div>
        <div style={{display:"flex",gap:"7px",fontSize:"20px"}}>
        <PhoneOutlined />
        <p> +923087065507</p>
        </div>
      
        <div style={{display:"flex",gap:"5px"}}>
            <div className={style.footerIon}><a href="" className={style.footerSocialIcon}>< FacebookOutlined /></a></div>
            <div className={style.footerIon}><a href=""className={style.footerSocialIcon}><LinkedinOutlined /></a></div>
            <div className={style.footerIon}><a href=""className={style.footerSocialIcon}><BehanceOutlined /></a></div>
            <div className={style.footerIon}><a href=""className={style.footerSocialIcon}><InstagramOutlined /></a></div>
            <div className={style.footerIon}><a href=""className={style.footerSocialIcon}><WhatsAppOutlined /></a></div>
        </div>
        
        

    </Col>
    </Row>
    <div style={{borderTop:"1px solid white",marginTop:"40px"}}>
        <p style={{textAlign:"center"}}>Copyright @ 2023, All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default fotter