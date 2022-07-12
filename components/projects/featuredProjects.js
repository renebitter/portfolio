import classes from './featuredProjects.module.scss';
import { useEffect, useState, useRef } from 'react';
import FeaturedProjectItem from './featuredProjectItem';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const FeaturedProjects = (props) => {
  const { featuredProjects } = props;

  //TODO: set sone snap to next element with "onDragEnd"
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.projects} id='projects'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>Featured projects</h2>

        {/* TODO: Add navigation arrows */}
        <motion.div ref={carousel} className={classes.carousel}>
          <motion.div
            drag='x'
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ scale: 0.99, cursor: 'grabbing' }}
            onDragEnd={(event, info) => console.log(info.point.x, info.point.y)}
            className={classes.innerCarousel}>
            {featuredProjects.map((project) => (
              <FeaturedProjectItem key={project._id} project={project} />
            ))}
          </motion.div>
        </motion.div>

        <div data-aos='fade-up' className={classes.buttonWrapper}>
          <Link href='/projects/'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='btn btn-outlined'>
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProjects;
