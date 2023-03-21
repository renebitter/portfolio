import classes from './featuredPosts.module.scss';
import PostItem from '../posts/postItem';
import { useEffect } from 'react';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const FeaturedPosts = (props) => {
  const { posts } = props;

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={`${classes.blog} mvh-100`} id='blog'>
      <div className={classes.container}>
        <h2 data-aos='slide-right'>Featured posts</h2>

        <div className={classes.galleryWrap}>
          <div className={classes.gallery}>
            {posts !== null &&
              posts !== undefined &&
              posts.map((post) => <PostItem post={post} key={post.slug} />)}
          </div>
        </div>

        <div data-aos='fade-up' className={classes.buttonWrapper}>
          <Link href='/posts/'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='btn btn-filled'>
              View All Posts
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedPosts;
