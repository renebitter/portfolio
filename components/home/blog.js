import classes from './blog.module.scss';

const Blog = () => {
  return (
    <section className={classes.blog} id='blog'>
      <div className='container'>
        <h2>Blog</h2>

        <div className='gallery-wrap'>
          <h3 className='gallery-title'>Featured posts</h3>
          <div className='gallery'>
            <div className='card'>
              <div className='card-content'>
                <h4>Blog article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat corrupti quis corporis maiores? Deserunt dolores sit
                  aliquam maxime possimus perspiciatis earum, asperiores, itaque
                  ab voluptatum amet, facilis vero ex voluptate.
                </p>
              </div>
              <div className='card-action'>
                <a href='#'>Read more</a>
              </div>
            </div>
            <div className='card'>
              <div className='card-content'>
                <h4>Blog article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat corrupti quis corporis maiores? Deserunt dolores sit
                  aliquam maxime possimus perspiciatis earum, asperiores, itaque
                  ab voluptatum amet, facilis vero ex voluptate. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Placeat corrupti
                  quis corporis maiores? Deserunt dolores sit aliquam maxime
                  possimus perspiciatis earum, asperiores, itaque ab voluptatum
                  amet, facilis vero ex voluptate.
                </p>
              </div>
              <div className='card-action'>
                <a href='#'>Read more</a>
              </div>
            </div>
            <div className='card'>
              <div className='card-content'>
                <h4>Blog article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat corrupti quis corporis maiores? Deserunt dolores sit
                  aliquam maxime possimus perspiciatis earum, asperiores, itaque
                  ab voluptatum amet, facilis vero ex voluptate.
                </p>
              </div>
              <div className='card-action'>
                <a href='#'>Read more</a>
              </div>
            </div>

            <div className='card'>
              <div className='card-content'>
                <h4>Blog article title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat corrupti quis corporis maiores? Deserunt dolores sit
                  aliquam maxime possimus perspiciatis earum, asperiores, itaque
                  ab voluptatum amet, facilis vero ex voluptate.
                </p>
              </div>
              <div className='card-action'>
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
