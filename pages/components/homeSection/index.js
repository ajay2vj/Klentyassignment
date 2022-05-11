import React from 'react'
import styles from './style.module.css'
import homeImg from '../../assets/img/Group_1006.png'
export default function HomeSection(){
  return(
    <section className={styles.sectionHome}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-sm-6'>
            <div className={styles.top_text}>
              <h1>Don't just integrate <span className={styles.span_text}>Accelerate your CRM</span></h1>
            </div>
            <div className={styles.body_text}>
              <span>Propel your sales team into a state of flow with CRM Accelerations. Switch out boring hours of repetitive work with high-impact activities. Build a repeatable sales process. </span>
            </div>
            <button className={styles.getStarted}>GET STARTED</button>
          </div>
          <div className='col-lg-6 col-sm-6'>
            <div className={styles.heart_img}>
              <img src={homeImg.src} alt="image for home section" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}