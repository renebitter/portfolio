// import classes from './posts.module.scss';

// const PostItem = (props) => {
//   const { post } = props;
//   const { title, image, excerpt, date, slug } = props.post;

//   const formattedDate = new Date(date).toLocaleDateString('en-Us', {
//     timeZone: 'UTC', //without this, date sets 1 day before
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric',
//   });

//   const imagePath = `/images/posts/${slug}/${image}`;
//   const linkPath = `/posts/${slug}`;

//   console.log(imagePath);
//   console.log(linkPath);

//   return (
//     <div key={post._id} className={classes.card}>
//       <div className={classes.cardContent}>
//         <h4>{post.title}</h4>
//         <time>{formattedDate}</time>
//         <p>{post.excerpt}</p>
//       </div>
//       <div className={classes.cardAction}>
//         <a href='#!' onClick={props.showModalHandler}>
//           Read more
//         </a>
//       </div>
//     </div>
//   );
// };
// export default PostItem;

import Link from 'next/link';
import Image from 'next/image';
import classes from './posts.module.scss';

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-Us', {
    timeZone: 'UTC', //without this, date sets 1 day before
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  //   const imagePath = `/images/posts/${slug}/${image}`;
  const imagePath = `/images/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
export default PostItem;
