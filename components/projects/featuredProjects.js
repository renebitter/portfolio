import classes from './featuredProjects.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FeaturedProjects = (props) => {
  const { featuredProjects } = props;

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.portfolio} id='projects'>
      <div className={classes.container}>
        <h2>Featured projects</h2>

        {featuredProjects.map((project) => (
          <div key={project._id} className={classes.project} data-aos='fade-up'>
            <div className={classes.row}>
              <div className={classes.columnLeft}>
                <h3>{project.title}</h3>
                <small>{project.subtitle}</small>
                <p className={classes.description}>{project.description}</p>

                <div className={classes.portfolioLinks}>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noreferrer'>
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
                  <Link href={`/projects/${project._id}`}>
                    <a>
                      <i className='fa fa-circle-info'></i>
                      Project details
                    </a>
                  </Link>
                </div>
              </div>

              <div className={classes.columnRight}>
                <div className={classes.card}>
                  <Link href={`/projects/${project._id}`}>
                    <a>
                      <Image
                        src={`/portfolio/images/projects/${project.image}`}
                        width={500}
                        height={360}
                        alt={project.title}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturedProjects;
