import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const PostContent = (props) => {
  const { post } = props;

  const title = post.title;
  const content = post.content;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  //   const customRenderers = {
  //     p(paragraph) {
  //       const { node } = paragraph;

  //       if (node.children[0].tagName === 'img') {
  //         const image = node.children[0];

  //         return (
  //           <div>
  //             <Image
  //               src={`/images/posts/${post.slug}/${image.properties.src}`}
  //               alt={image.alt}
  //               width={500}
  //               height={340}
  //             />
  //           </div>
  //         );
  //       }

  //       return <p>{paragraph.children}</p>;
  //     },
  //   };

  return (
    <article>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
