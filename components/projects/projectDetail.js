import Image from 'next/image';
import classes from './projectDetail.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectDetail = (props) => {
  const { project } = props;

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className={classes.projectDetail}>
      <div className='container section mvh-100'>
        <h1>{project.title}</h1>

        <div>
          <small>
            {Array.isArray(project.tech)
              ? project.tech.join(', ')
              : project.tech}
          </small>
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
        </div>

        {project.screenshots ? (
          <div>
            <h2>Screenshots & description</h2>
            <Swiper
              rewind={true}
              grabCursor={true}
              modules={[Pagination, Navigation]}
              navigation={true}
              pagination={pagination}
              // pagination={{
              //   dynamicBullets: true,
              // }}
              className='mySwiper'>
              {project.screenshots.map((screenshot, index) => (
                <SwiperSlide key={index}>
                  <Image
                    layout='responsive'
                    // objectFit='cover'
                    src={`../../portfolio/images/projects/${project.slug}/${screenshot.screenshot}`}
                    width={800}
                    height={560}
                    alt={screenshot.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          project.image && (
            <div className={classes.projectImage}>
              <Image
                src={`../../portfolio/images/projects/${project.image}`}
                width={500}
                height={360}
                alt=''
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default ProjectDetail;
