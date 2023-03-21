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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              molestiae libero eius adipisci reprehenderit, cumque illum atque
              provident ullam placeat harum veritatis odit perferendis ipsum
              aperiam mollitia voluptates temporibus nulla?
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              qui autem quis, alias porro eligendi nostrum impedit aut omnis a
              distinctio officiis excepturi facere incidunt ut! Asperiores
              laboriosam iure blanditiis.
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
              &quot;Distinctio officiis excepturi facere incidunt ut!&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
