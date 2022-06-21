import Head from 'next/head';
import Hero from '../components/home/hero';
import Portfolio from '../components/home/portfolio';
import PortfolioGallery from '../components/home/portfolioGallery';
import About from '../components/home/about';
import Posts from '../components/posts/posts';
import Footer from '../components/home/footer';
import { getFeaturedPosts } from '../util/posts-util';

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
      <Portfolio />
      <PortfolioGallery />
      <About />
      {/* <Blog /> */}
      <Posts posts={props.posts} />
      <Footer />
    </>
  );
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};
