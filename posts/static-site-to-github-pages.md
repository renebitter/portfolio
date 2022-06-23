---
title: 'How to deploy a static Next.js website on Github Pages'
date: '2022-06-22'
image: github-01.png
excerpt: 'First Markdown Post Aute eiusmod anim exercitation minim labore commodo et amet sunt occaecat proident proident pariatur.'
isFeatured: true
---

# How to deploy a static Next.js website on Github Pages

![Image ...](/portfolio-nextjs/images/posts/static-site-to-github-pages/github.jpg)

###### Using Next.js version 12.1.6

I've wanted to build a cool, or at least presentable, Portfolio-Blog for a while now. Since I've been working a lot with Next.js lately, I figured it would be a great idea to build this portfolio using it instead of some plain html/css/js. And since I didn't want to pay for hosting just right now, Github Pages should do the trick.

The original idea was to **next build** and **next export** the project and then manually upload the generated files to a repository. Since this didn't work the way I was thinking, I searched and found an even better solution. This involves using Github Actions and a third party CI/CD solution available at Github Marketplace. The one I used is ["Deploy to Github Pages"](https://github.com/marketplace/actions/deploy-to-github-pages).

### First step

- In your repository go to actions and add a workflow by choosing Node.js:

![Image ...](/portfolio-nextjs/images/posts/static-site-to-github-pages/github-actions-01.jpg)

- You'll get a **node.js.yml** file like the one bellow:

![Image ...](/portfolio-nextjs/images/posts/static-site-to-github-pages/github-actions-02.jpg)

- Starting at **- run: npm ci** replace it by the code below. Since I'm using **yarn** I also changed the respective **npm** commands. For example **run: yarn install --frozen-lockfile** is equivalent to **run: npm ci**

```yml
- run: npm install -g yarn
- run: yarn install --frozen-lockfile
- run: yarn build && export
- run: touch ./out/.nojekyll

- name: Deploy
  uses: JamesIves/github-pages-deploy-action@v4.3.3
  with:
    branch: gh-pages # The branch the action should deploy to.
    folder: out # The folder the action should deploy.
```

- In your application, change the **next.config.js** file:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/portfolio-nextjs',
};

module.exports = nextConfig;
```

- By the way you can also use a **isProduction** variable like this:

```js
const isProd = process.env.NODE_ENV === 'production';

//and then something like this ternary :
basePath: isProd ? '/portfolio-nextjs' : '',
```

Troubleshooting:

The main problem I had was that the images/assets wouldn't load because the basePath on github pages includes the repository name. This way the image path would always be incorrect. So instead of this:

```js
<Image
  src='/images/profile-pic.png'
  width={360}
  height={360}
  alt='profile-pic'
/>
```

I had to insert **portfolio-nextjs** (repos name) into each image src which is explained in the [official Next.js documentation](https://nextjs.org/docs/api-reference/next.config.js/basepath#images)

```js
<Image
  src='/portfolio-nextjs/images/profile-pic.png'
  width={360}
  height={360}
  alt='profile-pic'
/>
```
