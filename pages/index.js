import Head from 'next/head';
import Hero from '../components/home/hero';
import FeaturedProjects from '../components/projects/featuredProjects';
import Projects from '../components/projects/projects';
import About from '../components/home/about';
import FeaturedPosts from '../components/posts/featuredPosts';
import Footer from '../components/layout/footer';
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
          content='My personal web development portfolio including various frontend and fullstack projects as well as web development blog articles'
        />
      </Head>
      <Hero />
      <FeaturedProjects featuredProjects={props.featuredProjects} />
      <Projects nonFeaturedProjects={props.nonFeaturedProjects} />
      <About />
      <FeaturedPosts posts={props.posts} />
      <Footer />
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
