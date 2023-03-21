import classes from './allProjects.module.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectItem from './projectItem';

const AllProjects = (props) => {
  const { projects } = props;
  const [filter, setFilter] = useState('all');
  const [activeButton, setActiveButton] = useState('all');

  //Filter start
  const selectedTechs = [];

  //Map through all used techs and add them individually to selectedTechs array
  projects.map((project) => {
    //Complete array
    const techs = project.tech;

    if (Array.isArray(techs)) {
      //Array item
      for (const tech of techs) {
        if (!selectedTechs.includes(tech)) selectedTechs.push(tech);
      }
    }
  });

  //Sort techs alphabetically
  selectedTechs.sort();

  //Set "filter" & current active button
  const handleClick = (tech) => {
    setFilter(tech);
    setActiveButton(tech);
  };

  //Filter projects according to "filter"
  let filteredProjects;

  if (filter === 'all') {
    filteredProjects = projects.sort((a, b) => b.isFeatured - a.isFeatured);
  } else {
    filteredProjects = projects.filter((project) =>
      project.tech.includes(filter)
    );
  }

  return (
    <div className={classes.projectsGallery}>
      <div className={classes.container}>
        <h1>Projects</h1>
        <div className={classes.filter}>
          <p>Sort by tech:</p>
          <div className={classes.filterButtons}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClick('all')}
              className={
                activeButton === 'all'
                  ? 'btn btn-outlined sm active'
                  : 'btn btn-outlined sm'
              }>
              All
            </motion.button>
            {selectedTechs.map((tech) => (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleClick(tech)}
                className={
                  activeButton === tech
                    ? 'btn btn-outlined sm active'
                    : 'btn btn-outlined sm'
                }
                key={tech}>
                {tech}
              </motion.button>
            ))}
          </div>
        </div>

        <div className={classes.galleryWrap}>
          <div className={classes.gallery}>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectItem key={index} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProjects;
