import { getAllPosts } from '../../util/posts-util';

const Posts = (props) => {
  const { posts } = props;

  return (
    <div className='allPosts' style={{ minHeight: '100vh' }}>
      <div className='container'>
        <h1 style={{ textAlign: 'center' }}>All Posts</h1>
        {posts.map((post, index) => (
          <div key={index}>{post.title}</div>
        ))}
      </div>
    </div>
  );
};
export default Posts;

export const getStaticProps = (context) => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
