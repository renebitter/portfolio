import classes from './hero.module.scss';
import Image from 'next/image';

import { useState } from 'react';
import Modal from '../modal/modal';

const Hero = () => {
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <section className={classes.greetings}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.columnLeft}>
            <h3>Hi, my name is Rene.</h3>
            <h1>
              I&apos;m a React Frontend Developer with experience in e-commerce.
            </h1>
            <p>
              I&apos;m fluent in English{' '}
              <span>
                <Image
                  src='/portfolio-nextjs/images/usa.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>
              , German{' '}
              <span>
                <Image
                  src='/portfolio-nextjs/images/germany.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>
              , Portuguese{' '}
              <span>
                <Image
                  src='/portfolio-nextjs/images/brazil.png'
                  alt='usa-flag'
                  width={16}
                  height={16}
                />
              </span>{' '}
              and Javascript{' '}
              <span>
                <Image
                  src='/portfolio-nextjs/images/js.png'
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
                <i className='fab fa-github'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/rene-bitter/'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-linkedin'></i>
              </a>{' '}
              <a
                href='https://twitter.com/Rene_Bitter'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-twitter'></i>
              </a>{' '}
              <a
                href='https://codepen.io/rbitterdev'
                target='_blank'
                rel='noreferrer'>
                <i className='fab fa-codepen'></i>
              </a>
            </div>
            <div className={classes.ctaButtons}>
              <a href='#portfolio' className='btn btn-outlined'>
                My Work
              </a>
              <a
                href='#!'
                className='btn btn-filled'
                onClick={showModalHandler}>
                Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className={`${classes.columnRight} ${classes.profilePic}`}>
            <Image
              src='/portfolio-nextjs/images/profile-pic.webp'
              width={360}
              height={360}
              alt='profile-pic'
            />
          </div>
        </div>
        <div className={classes.iconScrollContainer}>
          <a href='#portfolio'>
            <div className={classes.iconScroll}></div>
          </a>
        </div>
      </div>

      {showModal && <Modal contact onClose={closeModalHandler} />}
    </section>
  );
};
export default Hero;
