import classes from './featuredProjects.module.scss';
import { useEffect } from 'react';
import ProjectItem from './projectItem';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const FeaturedProjects = (props) => {
  const { featuredProjects } = props;

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.projects} id='projects'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>Featured projects</h2>

        {featuredProjects.map((project) => (
          <ProjectItem key={project._id} project={project} />
        ))}
      </div>
      <div data-aos='fade-up' className={classes.buttonWrapper}>
        <Link href='/projects/'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='btn btn-filled'>
            View All Projects
          </motion.button>
        </Link>
      </div>
    </section>
  );
};
export default FeaturedProjects;
