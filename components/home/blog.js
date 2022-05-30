import classes from './blog.module.scss';

const Blog = () => {
  return (
    <section className={classes.blog} id='blog'>
      <div className={classes.container}>
        <h2>Blog</h2>

        <div className={classes.galleryWrap}>
          <h3 className={classes.galleryTitle}>Featured posts</h3>
          <div className={classes.gallery}>
            <div className={classes.card}>
              <div className={classes.cardContent}>
                <h4>Blog article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat corrupti quis corporis maiores? Deserunt dolores sit
                  aliquam maxime possimus perspiciatis earum, asperiores, itaque
                  ab voluptatum amet, facilis vero ex voluptate.
                </p>
              </div>
              <div className={classes.cardAction}>
                <a href='#'>Read more</a>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.cardContent}>
                <h4>Blog article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat corrupti quis corporis maiores? Deserunt dolores sit
                  aliquam maxime possimus perspiciatis earum, asperiores, itaque
                  ab voluptatum amet, facilis vero ex voluptate.
                </p>
              </div>
              <div className={classes.cardAction}>
                <a href='#'>Read more</a>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.cardContent}>
                <h4>Blog article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat corrupti quis corporis maiores? Deserunt dolores sit
                  aliquam maxime possimus perspiciatis earum, asperiores, itaque
                  ab voluptatum amet, facilis vero ex voluptate.
                </p>
              </div>
              <div className={classes.cardAction}>
                <a href='#'>Read more</a>
              </div>
            </div>

            <div className={classes.card}>
              <div className={classes.cardContent}>
                <h4>Blog article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat corrupti quis corporis maiores? Deserunt dolores sit
                  aliquam maxime possimus perspiciatis earum, asperiores, itaque
                  ab voluptatum amet, facilis vero ex voluptate.
                </p>
              </div>
              <div className={classes.cardAction}>
                <a href='#'>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
