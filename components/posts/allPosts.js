import classes from './allPosts.module.scss';
import PostItem from './postItem';

const AllPosts = (props) => {
  const { posts } = props;

  return (
    <section className={classes.blog}>
      <div className='container'>
        <h1 className='text-center'>All Blog Posts</h1>

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
