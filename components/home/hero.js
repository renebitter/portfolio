import classes from './hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.greetings}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div
            className={`${classes['column-right']} ${classes['profile-pic']}`}>
            <Image
              src='/images/profile-pic.png'
              width={360}
              height={360}
              alt='profile-pic'
            />
          </div>

          <div className={classes['column-left']}>
            <h3>Hi, my name is Rene.</h3>
            <h1>
              I&apos;m a Frontend Developer mainly focusing on React having also
              worked on Shopware projects.
            </h1>
            <p>
              {' '}
              I&apos;m fluent in English, German, Portuguese and Javascript.
            </p>
            <div className={classes['cta-buttons']}>
              {/* <a
                href='#portfolio'
                className={`${classes.btn} ${classes['btn-outlined']}`}>
                My Work
              </a>
              <a
                href='#'
                className={`${classes.btn} ${classes['btn-filled']}`}
                contact-modal>
                Let&apos;s Talk
              </a> */}

              <a href='#portfolio' className='btn btn-outlined'>
                My Work
              </a>
              <a href='#' className='btn btn-filled' contact-modal>
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
