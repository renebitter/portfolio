import classes from './featuredProjectItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProjectItem = (props) => {
  const { project } = props;

  return (
    <>
      <div className={classes.project}>
        <div className={classes.titleContainer}>
          <div className={classes.title}>
            <h3>{project.title}</h3>
            <small>
              {Array.isArray(project.tech)
                ? project.tech.join(', ')
                : project.tech}
            </small>
          </div>
        </div>

        <div className={classes.row}>
          <div className={classes.columnRight}>
            <Link href={`/projects/${project.slug}`}>
              <a>
                <div className={classes.card}>
                  <Image
                    src={`/portfolio/images/projects/${project.image}`}
                    width={600}
                    height={460}
                    alt={project.title}
                  />
                </div>
              </a>
            </Link>
          </div>

          <div className={classes.columnLeft}>
            <p className={classes.description}>{project.description}</p>

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
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturedProjectItem;
