import classes from './projectItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectItem = (props) => {
  const { project } = props;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ scale: 0.1 }}
      layout
      className={classes.card}>
      <div className={classes.cardContent}>
        <h4>{project.title}</h4>
        <small className='mb-10 d-block'>
          {Array.isArray(project.tech) ? project.tech.join(', ') : project.tech}
        </small>
        {project.image && (
          <div>
            <Image
              src={`../../portfolio/images/projects/${project.image}`}
              width={665}
              height={460}
              alt=''
            />
          </div>
        )}
        <p>{project.description}</p>
      </div>

      <div className={classes.projectLinks}>
        {project.githubLink && (
          <a href={project.githubLink} target='_blank' rel='noreferrer'>
            <i className='fab fa-github'></i>
            Github
          </a>
        )}
        {project.liveLink && (
          <a href={project.liveLink} target='_blank' rel='noreferrer'>
            <i className='fas fa-link'></i>
            Website
          </a>
        )}
        <Link href={`/projects/${project.slug}`}>
          <a>
            <i className='fa fa-circle-info'></i>
            Project details
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
