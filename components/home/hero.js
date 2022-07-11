import classes from './hero.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Modal from '../ui/modal/modal';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showModal, setShowModal] = useState();

  function buttonHandler() {
    window.location.href = '#projects';
  }

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.greetings}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.columnLeft}>
            <h3 data-aos='fade-left'>Hi, my name is Rene.</h3>
            <h1 data-aos='fade-right'>
              I&apos;m a React Frontend Developer with experience in e-commerce.
            </h1>
            <p data-aos='fade-left' data-aos-delay='150'>
              I&apos;m fluent in English{' '}
              <span>
                <Image
                  src='/portfolio/images/usa.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>
              , German{' '}
              <span>
                <Image
                  src='/portfolio/images/germany.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>
              , Portuguese{' '}
              <span>
                <Image
                  src='/portfolio/images/brazil.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>{' '}
              and Javascript{' '}
              <span>
                <Image
                  src='/portfolio/images/js.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>
              .
            </p>
            <div className={classes.socialMedia}>
              <a
                href='https://github.com/renebitter'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-github' data-aos='flip-up'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/rene-bitter/'
                target='_blank'
                rel='noreferrer'>
                <i
                  className='fab fa-linkedin'
                  data-aos='flip-up'
                  data-aos-delay='50'></i>
              </a>{' '}
              <a
                href='https://twitter.com/Rene_Bitter'
                target='_blank'
                rel='noreferrer'>
                <i
                  className='fab fa-twitter'
                  data-aos='flip-up'
                  data-aos-delay='100'></i>
              </a>{' '}
              <a
                href='https://codepen.io/rbitterdev'
                target='_blank'
                rel='noreferrer'>
                <i
                  className='fab fa-codepen'
                  data-aos='flip-up'
                  data-aos-delay='150'></i>
              </a>
            </div>
            <div className={classes.ctaButtons}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='btn btn-outlined'
                onClick={buttonHandler}>
                My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='btn btn-filled'
                onClick={showModalHandler}>
                Let&apos;s Talk
              </motion.button>
            </div>
          </div>

          <div className={`${classes.columnRight} ${classes.profilePic}`}>
            <Image
              src='/portfolio/images/profile-pic.webp'
              width={460}
              height={460}
              alt='profile-pic'
              data-aos='fade-left'
            />
          </div>
        </div>
        <div className={classes.iconScrollContainer}>
          <a href='#projects'>
            <div
              className={classes.iconScroll}
              data-aos='fade-down'
              data-aos-offset='50'></div>
          </a>
        </div>
      </div>

      {showModal && <Modal contact onClose={closeModalHandler} />}
    </section>
  );
};
export default Hero;
