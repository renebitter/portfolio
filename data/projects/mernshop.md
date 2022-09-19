---
  title: eCommerce website
  tech:
    - React
    - Redux
    - MongoDB
    - Node
    - Express
    - Bootstrap
  description: >-
    Fullstack e-commerce website using the MERN stack and Redux.
  liveLink: https://mernshop-99.herokuapp.com/
  githubLink: https://github.com/renebitter/mernshop
  image: mernshop.webp
  isFeatured: true
  screenshots:
    - screenshot: 01-home.png
      description: Homepage with navbar and hero element.
    - screenshot: 02-home.png
      description: >-
        Homepage. Carousel with 3 top-rated products and general product
        listing.
    - screenshot: 03-home.png
      description: Homepage. Product listing and pagination.
    - screenshot: 04-product-detail-page.png
      description: >-
        Product detail page. Product description, review rating, price, stock
        status, quantity selector, add to cart button and review section.
    - screenshot: 06-cart-empty.png
      description: Empty cart.
    - screenshot: 05-cart-full.png
      description: Multiple products added to cart. Quantity selection and price updates.
    - screenshot: 07-shipping.png
      description: Shipping address.
    - screenshot: 08-payment.png
      description: Payment method selection.
    - screenshot: 09-order-summary.png
      description: >-
        Order summary including shipping address, payment method, order items,
        prices and total price.
    - screenshot: 10-order-payment.png
      description: Order payment.
    - screenshot: 11-order-paypal.png
      description: Paypal integration.
    - screenshot: 12-order-paid.png
      description: Order summary - paid.
    - screenshot: 14-sign-in.png
      description: Sign in.
    - screenshot: 15-register.png
      description: Sign up.
    - screenshot: 16-admin-user-list.png
      description: Admin user list.
    - screenshot: 17-admin-user-edit.png
      description: Admin user edit.
    - screenshot: 18-admin-product-list.png
      description: Admin product list.
    - screenshot: 19-admin-product-edit.png
      description: Admin product edit/create.
    - screenshot: 20-admin-order-list.png
      description: Admin order list.
    - screenshot: 21-admin-order-edit.png
      description: Admin order edit. Mark as delivered.
    - screenshot: 22-admin-order-edit-2.png
      description: Admin order delivered.
    - screenshot: 23-user-profile-orders.png
      description: User profile orders.
    - screenshot: 24-user-profile-order-delivered.png
      description: User profile order delivered.
---

## Description

Fully functional and fullstack e-commerce website.

- Includes pages from product listing, product detail page, to user login, payment, shipment, etc.
- Admin area with CRUD functionality for users, products and orders.
- Authentication handled with JWT.
- Redux for state management.
- MongoDB

## Key takeaways

This is a complex project both in the backend and frontend.
Besides all route and controller logic with authentication, CRUD
and so on in the backend, my main takeaway for this project is the
state management with Redux in the frontend which is depicted in the diagram below.

## Structure

See below the diagrams for both frontend and backend.
<small>\* Some code/components were omitted for simplicity matter (e.g. orderController).</small>

### Frontend Diagram

<iframe style="border:none" width="100%" height="550" src="https://whimsical.com/embed/PMxfFafALUS8a2DTdF6ogt"></iframe>
<br />

#### Store

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
  //followed by all other reducers...
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

//followed by other localStorage variables...

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
```

</details>
<br />

#### Thunk

Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling asynchronous actions like using axios to send a GET request as seen in the API call from the Actions section above.

#### Constants

Just holds the constants names. The cases are: REQUEST, SUCCESS, FAIL, RESET.

#### Actions

Using async try/catch it fetches APIs and dispatches a type (e.g. REQUEST, SUCCESS, FAIL, RESET) that hits a Switch Case in the Reducer.

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```jsx
export const listProducts =
  (keyword = '', pageNumber = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`
      );

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
```

</details>
<br />

#### Reducers

Takes previous state and action with its Switch Case and returns next state.

<details>

  <summary>
    <ins>View code</ins>
    <span>
      <i class="fa-solid fa-angle-right"></i>
    </span>
  </summary>

```jsx
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
```

</details>
<br />

#### Screens

useDispatch & useSelector are both Redux Hooks.<br />
useDispatch will trigger the action and useSelector will receive the state.

#### Components

Some components also use Redux, like ProductCarousel and Header.

### Backend Diagram

<iframe style="border:none" width="100%" height="550" src="https://whimsical.com/embed/aqVxiWzGmMuuHVkkEmWH4"></iframe>
<br />

#### Server

The heart of the backend application. Connects to the DB via
config/db and uses all routes made available by routes (order,
product, user, upload) and error handling directly from the
middleware.

#### Config/db

Makes the connection to the database.

#### Routes

Best regarded as Endpoints. Route methods (get, post, put,
delete) are defined for the specified route and used in
conjunction with a controller and middleware functions, which
hold the logic. (e.g. router.post(&apos;/login&apos;,
authUser))

#### Controllers

Best regarded as the application logic. The functions defined
here will be requested when hitting the defined
routes/endpoints. It is the place where the logic for a given
route is applied.

#### Middleware

Either called directly from server.js for errorHandling or
from a given route, in this case userRoute, for both protect
and isAdmin functions. protect will make sure that the user is
logged in by verifying their bearer token (which is generated
by the util). isAdmin will make sure that the given user has
admin rights.

#### Utils

Generates a token which is called from the userController.
(e.g. when logging in a user)

#### Models

Defines the DB schema for a given model. userModal.js also
uses bcrypt to compare and hash passwords.
