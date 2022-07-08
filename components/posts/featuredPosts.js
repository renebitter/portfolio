import classes from './featuredPosts.module.scss';
import PostItem from './postItem';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const FeaturedPosts = (props) => {
  const { posts } = props;

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.blog} id='blog'>
      <div className={classes.container}>
        <h2>Blog</h2>

        <div className={classes.galleryWrap}>
          <h3 className={classes.galleryTitle} data-aos='fade-right'>
            Featured posts
          </h3>
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
export default FeaturedPosts;
