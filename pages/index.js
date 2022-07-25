import Head from 'next/head';
import Hero from '../components/home/hero';
import FeaturedProjects from '../components/projects/featuredProjects';
import About from '../components/home/about';
import FeaturedPosts from '../components/posts/featuredPosts';
import { getFeaturedPosts } from '../util/posts-util';
import {
  getFeaturedProjects,
  getNonFeaturedProjects,
} from '../util/projects-util';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Rene Bitter &lt;Web Developer /&gt;</title>
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
  const nonFeaturedProjects = getNonFeaturedProjects();

  return {
    props: {
      posts: featuredPosts,
      featuredProjects: featuredProjects,
      nonFeaturedProjects: nonFeaturedProjects,
    },
  };
};
