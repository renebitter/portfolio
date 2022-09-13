---
  title: Portfolio-Blog
  tech:
    - React
    - Next.js
    - Markdown
    - Sass
  description: >-
    Next.js (SSG). Projects and posts written in markdown and rendered with
    react-markdown.
  liveLink: https://renebitter.github.io/portfolio
  githubLink: https://github.com/renebitter/portfolio
  image: portfolio.jpg
  isFeatured: true
---

## Description

Personal portfolio and blog website.

- Developed with Next.js using Static Site Generation.
- Dynamic pages for projects and blog posts.
- Blog posts and project details written in markdown and rendered with
  react-markdown.
- Framer motion, AOS and Swiper for the "eye candy".
- Deployed with ["Deploy to GitHub Pages"](github.com/marketplace/actions/deploy-to-github-pages).

## Key takeaways

I've wanted to build a cool, or at least presentable, portfolio for a while now. Since I've been working a lot with Next.js lately, I figured it would be a great idea to build this portfolio using Next.js instead of some plain html/css/js. Because I wanted to write some blog posts as well, it would make sense to use Next.js due to its SEO advantages. And since I didn't want to pay for hosting just yet, Github Pages should do the trick.

It turned out to be not more complicated but bigger and more complex than expected. You can check out my blog post [<ins>here</ins>](/portfolio/posts/static-site-to-github-pages) where I go into detail about deploying this portfolio, but it might not be the best approach to deploy it, since github now supports direct deployment of static sites like this.

This is an evolving project, so there is some room for DRY improvement since things went another way as originally thought of. E.g. I started rendering posts with react-markdown and projects descriptions like this with JSON. After a while I decided to render project descriptions also with react-markdown.

## Project Details

### Project Diagram

<iframe style="border:none" width="100%" height="550" src="https://whimsical.com/embed/AWZSFKT3Fa9k2NRcFMPDH9"></iframe>
<br />
<br />

### Pages

#### index

Gets static props for featuredPosts and featuredProjects and holds components of the main page.

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```jsx
export default function Home(props) {
  return (
    <>
      <Head>
        // <title>
        // <meta/>
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
```

</details>
<br />

#### \_app

Encapsulates the whole app making components like Navbar and Footer available on all pages. Sets a default theme and takes in a theme change from the Navbar component.

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```jsx
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <div className='app' data-theme={theme}>
        <Navbar theme={setTheme}>
          <Head>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <link rel='shortcut icon' href='/portfolio/favicon.ico' />
          </Head>
          <Component {...pageProps} currentTheme={theme} />
          <Footer />
        </Navbar>
      </div>
    </>
  );
}
```

</details>
<br />

#### \_document

Custom 'Document' adds fonts and optimizes loading for all pages. The Head component used in '\_document' is not the same as 'next/head'.

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```jsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Fira+Code&family=Poppins&display=swap'
            rel='stylesheet'
          />

          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
            integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

</details>
<br />

#### \projects\index

getStaticProps for all projects and sends props to AllProjects component.

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```jsx
const Projects = (props) => {
  const { projects } = props;

  return (
    <>
      // <Head>
      <AllProjects projects={projects} />
    </>
  );
};
export default Projects;

export const getStaticProps = (context) => {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
};
```

</details>
<br />

#### \projects\\[slug]

getStaticProps & getStaticPaths for all dynamic pages and sends props to ProjectContent component.

getProjectsFiles() gets all markdown files in the data directory.

'const slugs' maps through all markdown files and removes the '.md' extension and uses the file name as the slug.

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```jsx
const ProjectDetailPage = (props) => {
  const { project, currentTheme } = props;

  return (
    <>
      // <Head>
      <ProjectContent project={project} currentTheme={currentTheme} />
    </>
  );
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;
  const projectData = getProjectData(slug);

  return {
    props: {
      project: projectData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const projectsFilenames = getProjectsFiles();
  const slugs = projectsFilenames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default ProjectDetailPage;
```

</details>
<br />

### Components

#### ProjectContent

ProjectContent explanation...

Renders the content you are currently reading form the markdown file and sets theme for code snippets with 'const customRenderers'

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```jsx
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  solarizedlight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Image from 'next/image';
import classes from './projectContent.module.scss';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectContent = (props) => {
  const { project, currentTheme } = props;
  const content = project.content;

  const customRenderers = {
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <>
          {currentTheme === 'dark' ? (
            <SyntaxHighlighter
              showLineNumbers
              language={language}
              style={atomDark}
              // eslint-disable-next-line react/no-children-prop
              children={children}
            />
          ) : (
            <SyntaxHighlighter
              showLineNumbers
              language={language}
              style={solarizedlight}
              // eslint-disable-next-line react/no-children-prop
              children={children}
            />
          )}
        </>
      );
    },
  };

  return (
    <div className={classes.projectDetail}>
      <div className='container section mvh-100 projectDetail'>
        <Link href='/projects/'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='btn btn-filled'>
            View All Projects
          </motion.button>
        </Link>

        <div className={classes.card}>
          <div className={classes.projectLinks}>
            {project.githubLink && (
              <a href={project.githubLink} target='_blank' rel='noreferrer'>
                <i className='fab fa-github'></i>
                Github
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target='_blank' rel='noreferrer'>
                <i className='fas fa-link'></i>
                Website
              </a>
            )}
          </div>

          <h1>{project.title}</h1>
          <small>
            {Array.isArray(project.tech)
              ? project.tech.join(', ')
              : project.tech}
          </small>

          {project.image && (
            <div className={classes.projectImage}>
              <Image
                src={`../../portfolio/images/projects/${project.image}`}
                width={500}
                height={360}
                alt=''
              />
            </div>
          )}

          <ReactMarkdown
            components={customRenderers}
            rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>

          {project.screenshots && (
            <div className='mb-50'>
              <h2>Screenshots</h2>
              <Swiper
                rewind={true}
                grabCursor={true}
                modules={[Navigation]}
                navigation={true}
                className='mySwiper'>
                {project.screenshots.map((screenshot, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={`../../portfolio/images/projects/${project.slug}/${screenshot.screenshot}`}
                      width={1000}
                      height={700}
                      alt={screenshot.description}
                    />
                    <div className={classes.description}>
                      {index + 1}. {screenshot.description}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
```

</details>
<br />
