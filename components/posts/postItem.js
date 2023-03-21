import Link from 'next/link';
import classes from './postItem.module.scss';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PostItem = (props) => {
  const { title, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-Us', {
    timeZone: 'UTC', //without this, date sets 1 day before
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const linkPath = `/posts/${slug}`;

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className={classes.card} data-aos='zoom-in-up'>
      <div className={classes.cardContent}>
        <h4>{title}</h4>
        <time>{formattedDate}</time>
        <p>{excerpt}</p>
      </div>
      <div className={classes.cardAction}>
        <Link href={linkPath}>
          <a>Read more</a>
        </Link>
      </div>
    </div>
  );
};
export default PostItem;
