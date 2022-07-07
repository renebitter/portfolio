import Head from 'next/head';
import Hero from '../components/home/hero';
import Portfolio from '../components/home/portfolio';
import PortfolioGallery from '../components/home/portfolioGallery';
import About from '../components/home/about';
import FeaturedPosts from '../components/posts/featuredPosts';
import Footer from '../components/home/footer';
import { getFeaturedPosts } from '../util/posts-util';
import projects from '../data/projects.json';

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
      <Portfolio featuredProjects={props.featuredProjects} />
      <PortfolioGallery nonFeaturedProjects={props.nonFeaturedProjects} />
      <About />
      <FeaturedPosts posts={props.posts} />
      <Footer />
    </>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  const featuredProjects = projects.filter((project) => project.isFeatured);
  const nonFeaturedProjects = projects.filter((project) => !project.isFeatured);

  return {
    props: {
      posts: featuredPosts,
      featuredProjects: featuredProjects,
      nonFeaturedProjects: nonFeaturedProjects,
    },
  };
};
