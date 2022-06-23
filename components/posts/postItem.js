import Link from 'next/link';
import classes from './postItem.module.scss';

const PostItem = (props) => {
  const { title, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-Us', {
    timeZone: 'UTC', //without this, date sets 1 day before
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const linkPath = `/posts/${slug}`;

  return (
    <div className={classes.card}>
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
