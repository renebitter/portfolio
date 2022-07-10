import { getAllPosts } from '../../util/posts-util';

const Posts = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((post, index) => (
        <div key={index}>{post.title}</div>
      ))}
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
