import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  solarizedlight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Image from 'next/image';
import classes from './projectContent.module.scss';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectContent = (props) => {
  const { project, currentTheme } = props;
  const content = project.content;

  const customRenderers = {
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <>
          {currentTheme === 'dark' ? (
            <SyntaxHighlighter
              showLineNumbers
              language={language}
              style={atomDark}
              // eslint-disable-next-line react/no-children-prop
              children={children}
            />
          ) : (
            <SyntaxHighlighter
              showLineNumbers
              language={language}
              style={solarizedlight}
              // eslint-disable-next-line react/no-children-prop
              children={children}
            />
          )}
        </>
      );
    },
  };

  return (
    <div className={classes.projectDetail}>
      <div className='container section mvh-100 projectDetail'>
        <Link href='/projects/'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='btn btn-filled'>
            View All Projects
          </motion.button>
        </Link>

        <div className={classes.card}>
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

          <h1>{project.title}</h1>
          <small>
            {Array.isArray(project.tech)
              ? project.tech.join(', ')
              : project.tech}
          </small>

          {project.image && (
            <div className={classes.projectImage}>
              <Image
                src={`../../portfolio/images/projects/${project.image}`}
                width={500}
                height={360}
                alt=''
              />
            </div>
          )}

          <ReactMarkdown
            components={customRenderers}
            rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>

          {project.screenshots && (
            <div className='mb-50'>
              <h2>Screenshots</h2>
              <Swiper
                rewind={true}
                grabCursor={true}
                modules={[Navigation]}
                navigation={true}
                className='mySwiper'>
                {project.screenshots.map((screenshot, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`../../portfolio/images/projects/${project.slug}/${screenshot.screenshot}`}
                      width={1000}
                      height={700}
                      alt={screenshot.description}
                    />
                    <div className={classes.description}>
                      {index + 1}. {screenshot.description}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
