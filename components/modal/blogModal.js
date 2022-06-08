import classes from './modal.module.scss';
import Image from 'next/image';

const BlogModal = (props) => {
  const { post } = props;

  return (
    <div className={classes.modal}>
      <div className={classes.projectModal}>
        <h2>{post.title}</h2>
      </div>
    </div>
  );
};
export default BlogModal;
