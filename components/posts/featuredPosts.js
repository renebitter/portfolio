import classes from './posts.module.scss';
import PostItem from './postItem';

const FeaturedPosts = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <section className={classes.blog} id='blog'>
      <div className={classes.container}>
        <h2>Blog</h2>

        <div className={classes.galleryWrap}>
          <h3 className={classes.galleryTitle}>Featured posts</h3>
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
