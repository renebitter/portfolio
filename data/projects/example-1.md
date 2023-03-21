---
  title: Example 1
  tech:
    - React
    - MongoDB
    - Node
    - Express
    - Context
  description: This is a MERN Fullstack project with authentication and CRUD functionality.
  liveLink: https://google.com/
  githubLink: https://github.com/
  image: contact-keeper.png
  isFeatured: true
  screenshots:
    - screenshot: 01-home.png
      description: Homepage with navbar and hero element.
    - screenshot: 02-home.png
      description: >-
        Homepage. Carousel with 3 top-rated products and general product
        listing.
---

## Description

This is a MERN Fullstack project with authentication and CRUD functionality.

## Key takeaways

Context

#### Code Example

Combines all reducers and apply thunk (middleware that allows
you to return functions).

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```js
const reducer = combineReducers({
  productList: productListReducer,
});
```

</details>
<br />
