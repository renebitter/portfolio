import classes from './featuredPosts.module.scss';
import PostItem from './postItem';
import { useEffect } from 'react';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const AllPosts = (props) => {
  const { posts } = props;

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={`${classes.blog} vh-100`}>
      <div className='container'>
        <h2 className='text-center' data-aos='slide-up'>
          All Blog Posts
        </h2>

        <div className={classes.galleryWrap}>
          <div className={classes.gallery}>
            {posts !== null &&
              posts !== undefined &&
              posts.map((post) => <PostItem post={post} key={post.slug} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllPosts;
