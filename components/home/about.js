import classes from './about.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.about} id='about'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>About me</h2>

        <div className={classes.row}>
          <div className={classes.columnLeft} data-aos='fade-right'>
            <h3>
              Moved by the desire to work with something creative I began
              learning Web Development in 2017.
            </h3>
            <p>
              My developer career started with a great emphasis on e-commerce as
              a Shopware Frontend Developer and I even worked on the development
              of <i className='fas fa-link'></i>{' '}
              <a
                href='https://github.com/shopware/platform'
                target='_blank'
                rel='noreferrer'>
                Shopware 6
              </a>
              . Later on I specialized in React and it&apos;s ecosystem. I
              really like problem-solving in general and am addicted to the
              feeling of solving them.
            </p>

            <p>
              Besides Web Development I have a diverse work experience ranging
              from Airfreight Logistics at the Frankfurt Airport in Germany to
              Customer Support in Tech Companies around Europe and Brazil.
            </p>

            <p>
              I&apos;m no stranger to multiculturalism and I appreciate
              diversity as well as discovering and experiencing new cultures.
              Loving nature and being outdoors makes my favorite pastime hiking
              and mountain climbing.
            </p>
          </div>

          <div className={classes.columnRight}>
            <div className={classes.imageContainer}>
              <Image
                src='/portfolio/images/profile-pic-2.webp'
                width={600}
                height={600}
                alt='profile-pic'
                data-aos='fade-left'
              />
            </div>
            <div className={classes.quote} data-aos='fade-right'>
              &quot;Perspective is everything and everything starts with a
              dot.&quot;
              <span className={classes.tooltip}>
                In case you were wondering about my logo...{' '}
                <Image
                  src='/portfolio/images/icons/mindblown.png'
                  alt='mindblown'
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
