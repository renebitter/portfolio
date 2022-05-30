import classes from './hero.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.greetings}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div
            className={`${classes.columnRight} ${classes.profilePic} ${classes.columnRight}`}>
            <Image
              src='/images/profile-pic.png'
              width={360}
              height={360}
              alt='profile-pic'
            />
          </div>

          <div className={classes.columnLeft}>
            <h3>Hi, my name is Rene.</h3>
            <h1>
              I&apos;m a React Frontend Developer having also worked on Shopware
              projects.
            </h1>
            <p>
              {' '}
              I&apos;m fluent in English, German, Portuguese and Javascript.
            </p>
            <div className={classes.ctaButtons}>
              <a href='#portfolio' className='btn btn-outlined'>
                My Work
              </a>
              <a href='#' className='btn btn-filled'>
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
