import Head from 'next/head';
import { getAllPosts } from '../../util/posts-util';
import AllPosts from '../../components/posts/allPosts';

const Posts = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Blog Posts</title>
        <meta
          name='description'
          content='List of all my web development blog posts/articles including technologies like React, Next.js, Redux, Typescript, Node.js, Express, MongoDB, Bootstrap and Shopware.'
        />
      </Head>
      <AllPosts posts={posts} />
    </>
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
