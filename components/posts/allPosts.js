import classes from './allPosts.module.scss';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PostItem from './postItem';

const AllPosts = (props) => {
  const { posts } = props;
  const [filter, setFilter] = useState('all');
  const [activeButton, setActiveButton] = useState('all');

  //Filter start
  const selectedPosts = [];

  //Map through all used techs and add them individually to selectedPosts array
  posts.map((post) => {
    //Complete array
    const techs = post.tech;

    if (Array.isArray(techs)) {
      //Array item
      for (const tech of techs) {
        if (!selectedPosts.includes(tech)) selectedPosts.push(tech);
      }
    }
  });

  //Sort techs alphabetically
  selectedPosts.sort();

  //Set "filter" & current active button
  const handleClick = (tech) => {
    setFilter(tech);
    setActiveButton(tech);
  };

  //Filter posts according to "filter"
  let filteredPosts;

  if (filter === 'all') {
    filteredPosts = posts.sort((a, b) => b.isFeatured - a.isFeatured);
  } else {
    filteredPosts = posts.filter((post) => post.tech.includes(filter));
  }

  return (
    <section className={classes.blog}>
      <div className={classes.container}>
        <h1>Blog Posts</h1>
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
            {selectedPosts.map((tech) => (
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
              {posts !== null &&
                posts !== undefined &&
                filteredPosts.map((post) => (
                  <PostItem post={post} key={post.slug} />
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllPosts;
