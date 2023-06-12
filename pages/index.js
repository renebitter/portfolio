import Head from 'next/head';
import Hero from '../components/home/hero';
import FeaturedProjects from '../components/home/featuredProjects/featuredProjects';
import FeaturedPosts from '../components/home/featuredPosts';
import About from '../components/home/about';
import { getFeaturedPosts } from '../util/posts-util';
import { getFeaturedProjects } from '../util/projects-util';

// TODO: rename posts to featuredPosts

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <meta
          name='description'
          content='My personal web development portfolio including various frontend and fullstack projects as well as web development blog articles. Tech-Stack: React, Next.js, Redux, Typescript, Node.js, Express, MongoDB, Bootstrap, Shopware.'
        />
      </Head>
      <Hero />
      <FeaturedProjects featuredProjects={props.featuredProjects} />
      <FeaturedPosts posts={props.posts} />
      <About />
    </>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  const featuredProjects = getFeaturedProjects();

  return {
    props: {
      posts: featuredPosts,
      featuredProjects: featuredProjects,
    },
  };
};
