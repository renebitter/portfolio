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
              I&apos;m a React Frontend Developer. <br />I also worked on
              Shopware projects.
            </h1>
            <p>
              {' '}
              I&apos;m fluent in English, German, Portuguese and Javascript.
            </p>
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
              src='/images/profile-pic.png'
              width={360}
              height={360}
              alt='profile-pic'
            />
          </div>
        </div>
        <a href='#portfolio'>
          <div className={classes.iconScroll}></div>
        </a>
      </div>

      {showModal && <Modal contact onClose={closeModalHandler} />}
    </section>
  );
};
export default Hero;
