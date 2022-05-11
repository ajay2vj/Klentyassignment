import React from 'react'
import { ActionKind, usePony } from "pony-props";
import firstImg from '../../assets/img/Vector.png'
import signOne from '../../assets/img/double_logo.png'
import signTwo from '../../assets/img/red-eye.png'
import adamImg from '../../assets/img/adam.png'
import gavinImg from '../../assets/img/gavin.png'
import { Image } from '@chakra-ui/react';
import {HiArrowNarrowLeft, HiArrowNarrowRight} from 'react-icons/hi'
import styles from './style.module.css';

export const MyCarousel = () => {
  const items = [
    {
      id: 1,
      img1: firstImg,
      profImg: adamImg,
      paragraph: 'Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%',
      signLogo: signOne,
      adam: 'Adam Weigner',
      role: 'President,Double The Donation'
    },
    {
      id: 2,
      img1: firstImg,
      profImg: gavinImg,
      paragraph: 'It changed our business. Klenty allowed our outbounds sales team to leverage their time and skills',
      signLogo: signTwo,
      adam: 'Gavin Tye',
      role: 'Sales Director, Red Eye'
    }
  ]
  const {
    getSectionProps,
    getHeadingProps,
    getCarouselWrapperProps,
    getCarouselProps,
    getCarouselItemProps,
    getButtonProps,
    getAnnouncerProps,
    // state
  } = usePony({ numItems: items.length });

  return (
    <div {...getSectionProps()}>
      <h1 {...getHeadingProps()} className={styles.head_text}>What our customers have to say</h1>
      <div {...getCarouselWrapperProps()}>
        <ul {...getCarouselProps()}>
          {items.map((item, idx) => (
            <li key={idx} {...getCarouselItemProps(idx)}>
              <div className={`container ${styles.desktop_view}`}>
                <div className='row'>
                  <div className='col-lg-6'>
                    <Image src={item?.img1.src} alt='quote' className={styles.quote_img} />
                    <p className={styles.para_text}>{item?.paragraph}</p>
                    <div className={`d-flex ${styles.signatute_div}`}>
                      <div className={styles.Image_class}>
                        <Image src={item?.signLogo.src} alt='sign'/>
                      </div>
                      <div className={styles.role_div}>
                        <h6>{item?.adam}</h6>
                        <span>{item?.role}</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className={styles.profile_img}>
                      <Image src={item?.profImg.src} alt='profileImage' />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`container ${styles.mobile_view}`}>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className={styles.profile_img}>
                      <Image src={item?.profImg.src} alt='profileImage' />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className={styles.content_column}>
                      <Image src={item?.img1.src} alt='quote' className={styles.quote_img}/>
                      <p className={styles.para_text}>{item?.paragraph}</p>
                      <div className={`d-flex ${styles.signatute_div}`}>
                        <div className={styles.Image_class}>
                          <Image src={item?.signLogo.src} alt='sign'/>
                        </div>
                        <div className={styles.role_div}>
                          <h6>{item?.adam}</h6>
                          <span>{item?.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.arrow}>
        <button {...getButtonProps(ActionKind.Previous)}><HiArrowNarrowLeft fill='#5856CE' /></button>
        <button {...getButtonProps(ActionKind.Next)}><HiArrowNarrowRight fill='#5856CE'/></button>
      </div>
      <div {...getAnnouncerProps()}>
      </div>
    </div>
  );
};

export default function CustomerSection(){
  return(
    <section className={styles.section_customer}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-11 offset-lg-1'>
            <MyCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}