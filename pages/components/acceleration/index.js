import React from 'react'
import styles from './acceleration.module.css'
import neverUP from '../../assets/img/Group_1006-3.png'
import Engage from '../../assets/img/Group_1006-4.png'
import Outreach from '../../assets/img/Group_1006-5.png'
import { Image } from '@chakra-ui/react'
export default function Acceleration(){
  return(
    <section className={styles.acceleration_background}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className={styles.acceleration_text}>
              <h1>CRM Acceleration</h1>
              <span>Everything CRM Integrations was supposed to be. And more.</span>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className={styles.sec_box}>
              <Image src={neverUP.src} alt="neverUp" />
              <h5>Never update your contacts manually</h5>
              <span>Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities</span>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className={styles.sec_box}>
              <Image src={Engage.src} alt="neverUp" />
              <h5>Engage instantly with prospects who show intent</h5>
              <span>Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat.</span>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className={styles.sec_box}>
              <Image src={Outreach.src} alt="neverUp" />
              <h5>Outreach without leaving your CRM </h5>
              <span>Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}