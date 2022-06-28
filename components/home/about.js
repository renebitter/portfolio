import classes from './about.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.container}>
        <h2>About me</h2>

        <div className={classes.row}>
          <div className={classes.columnLeft}>
            <h3>
              Moved by the desire to work with something creative I began
              learning Web Development in 2017.
            </h3>
            <p>
              My developer career started with a great emphasis on e-commerce as
              a Shopware Frontend Developer and I even worked on the development
              of Shopware 6 itself. Later on I specialized in React and
              it&apos;s ecosystem.
            </p>

            <p>
              Besides Web Development I have a diverse work experience ranging
              from Airfreight Logistics at the Frankfurt Airport to Customer
              Support in Tech Companies around Europe and Brazil.
            </p>

            <p>
              I&apos;m no stranger to multiculturalism and I appreciate
              diversity as well as discovering and experiencing new cultures.
              Loving nature and being outdoors makes my favorite pastime hiking
              and mountain climbing.
            </p>
          </div>

          <div className={`${classes.columnRight} ${classes.profilePic}`}>
            <Image
              src='/portfolio-nextjs/images/profile-pic-2.webp'
              width={360}
              height={360}
              alt='profile-pic'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
