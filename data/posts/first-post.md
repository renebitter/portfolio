---
title: 'Using Markdown as a blog format'
date: '2022-04-03'
image: first-post.jpg
excerpt: 'How to build a blog using react-markdown to render posts written in markdown'
isFeatured: true
tech: ['Markdown']
---

# Using Markdown as a blog format

![Image ...](/portfolio/images/posts/first-post/markdown.jpg)

```text
---
title: 'Using Markdown as a blog format'
date: '2022-04-03'
image: first-post.jpg
excerpt: 'How to build a blog using react-markdown to render posts written in markdown'
isFeatured: true
---

```

```jsx
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import classes from './postContent.module.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const PostContent = (props) => {
  const { post } = props;

  const title = post.title;
  const content = post.content;
  const imagePath = `/portfolio/images/posts/${post.slug}/${post.image}`;

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
