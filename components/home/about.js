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
              a Shopware Frontend Developer and later I specialized in React and
              it&apos;s ecosystem.
            </p>

            <p>
              Besides Web Development I have a diverse working experience
              ranging from airfreight logistics at the Frankfurt Airport to
              customer support in tech companies around Europe and Brazil.
            </p>

            <p>
              As a Brazilian-German I appreciate diversity as well as
              discovering and experiencing new cultures. Loving nature and being
              outdoors makes my favorite pastime hiking and mountain climbing.
            </p>
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
      </div>
    </section>
  );
};
export default About;
