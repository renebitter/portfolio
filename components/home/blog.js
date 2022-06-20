import classes from './blog.module.scss';
import { useState } from 'react';
import Modal from '../modal/modal';
import posts from '../../data/posts.json';

const Blog = (props) => {
  const [showModal, setShowModal] = useState();
  const [currentPost, setCurrentPost] = useState();

  function showModalHandler(post) {
    setCurrentPost(post);
    setShowModal(true);
  }

  function closeModalHandler() {
    setCurrentPost(null);
    setShowModal(false);
  }

  return (
    <section className={classes.blog} id='blog'>
      <div className={classes.container}>
        <h2>Blog</h2>

        <div className={classes.galleryWrap}>
          <h3 className={classes.galleryTitle}>Featured posts</h3>
          <div className={classes.gallery}>
            {posts.map((post) => (
              <div key={post._id} className={classes.card}>
                <div className={classes.cardContent}>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                </div>
                <div className={classes.cardAction}>
                  <a href='#!' onClick={() => showModalHandler(post)}>
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && <Modal post={currentPost} onClose={closeModalHandler} />}
    </section>
  );
};
export default Blog;
