import React from 'react'
import styles from './style.module.css'
import homeImg from '../../assets/img/Group_1006.png'
import MobilehomeImg from '../../assets/img/Group_1009.png'
import { Image } from '@chakra-ui/react'
export default function HomeSection(){
  return(
    <section className={styles.sectionHome}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className={styles.header_div}>
              <div className={styles.top_text}>
                <h1>Don&apos;t just integrate</h1>
                <span className={styles.span_text}>Accelerate your CRM</span>
              </div>
              <div className={styles.body_text}>
                <span>Propel your sales team into a state of flow with CRM Accelerations. Switch out boring hours of repetitive work with high-impact activities. Build a repeatable sales process. </span>
              </div>
              <button className={styles.getStarted}>GET STARTED</button>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className={styles.heart_img}>
              <Image src={homeImg.src} alt="image for home section" className={styles.desktopIMG}/>
              <Image src={MobilehomeImg.src} alt="image for home section" className={styles.mobileIMG}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}