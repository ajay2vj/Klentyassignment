import React from 'react'
import logo from '../../assets/img/Big_Logo.png'
import styles from './style.module.css'
import { Image } from '@chakra-ui/react'
export default function Navbar(){
  return(
    <div className={styles.page_wrapper}>
      <div className={styles.nav_wrapper}>
        <nav className={styles.navbar}>
          <Image
            src={logo.src}
            alt="logo"
          />
          <ul className={styles.nav}>
            <li className={styles.nav_item}><a href="#">Platform</a></li>
            <li className={styles.nav_item}><a href="#">Pricing</a></li>
            <li className={styles.nav_item}><a href="#">Acceleration</a></li>
            <li className={styles.nav_item}><a href="#">Resources</a></li>
            <li className={styles.nav_item}><a href="#">Customer Stories</a></li>
          </ul>
          <div className={styles.nav_button}>
            <span className={styles.login_text}>Log in</span>
            <button className={styles.nav_schedule}>SCHEDULE DEMO</button>
            <button className={styles.nav_tryfree}>TRY FOR FREE</button>
          </div>
        </nav>
      </div>
    </div>
  )
}