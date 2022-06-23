---
title: 'Using Markdown as a blog format'
date: '2022-04-03'
image: first-post.jpg
excerpt: 'First Markdown Post Aute eiusmod anim exercitation minim labore commodo et amet sunt occaecat proident proident pariatur.'
isFeatured: true
---

# Using Markdown as a blog format

Aute eiusmod anim exercitation minim labore commodo et amet sunt occaecat proident proident pariatur. Non incididunt laboris esse adipisicing enim eu eiusmod. In aute dolore veniam reprehenderit commodo eu exercitation laborum nisi. Occaecat reprehenderit elit consequat elit ex cillum nostrud cillum.

```js
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import classes from './postContent.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent = (props) => {
  const { post } = props;

  const title = post.title;
  const content = post.content;
  const imagePath = `/portfolio-nextjs/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div>
            <Image src={imagePath} alt={image.alt} width={450} height={450} />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here

      return (
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          // eslint-disable-next-line react/no-children-prop
          children={children}
        />
      );
    },
  };

  return (
    <div className={classes.postContent}>
      <div className={classes.container}>
        <article>
          <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default PostContent;
```

Ad veniam fugiat tempor magna ad voluptate esse velit minim minim veniam elit. Ea enim culpa magna sit cupidatat adipisicing eu Lorem cillum deserunt adipisicing cupidatat ad qui. Deserunt do magna ipsum culpa duis. Voluptate ipsum minim consequat consectetur ea. Aliqua et ex ut dolore aliqua sint ipsum dolore labore mollit labore. Occaecat labore do tempor qui.

![Image ...](/public/images/posts/first-post/first-post.jpg)
