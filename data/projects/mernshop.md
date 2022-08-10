---
  title: eCommerce website - MERN Fullstack
  tech:
    - React
    - Redux
    - MongoDB
    - Node
    - Express
    - Bootstrap
  description: >-
    Fully functional e-commerce website including pages from product listing to
    payment and admin area with CRUD functionality for users, products and
    orders. Authentication handled with JWT. Redux for state management.
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

Fully functional e-commerce website including pages from product listing to payment and admin area with CRUD functionality for users, products and orders. Authentication handled with JWT. Redux for state management.

## Key takeaways

This is a complex project both in the backend and frontend.
Besides all route and controller logic with authentication, CRUD
and so on in the backend, my main takeaway for this project is the
state management with Redux in the frontend.
<br />
<br />
Explain redux usage...

## Structure

See below the diagrams for both backend and frontend. Some code was omitted for simplicity matter (e.g. orderController).

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

### Frontend Diagram

<iframe style="border:none" width="100%" height="550" src="https://whimsical.com/embed/PMxfFafALUS8a2DTdF6ogt"></iframe>
<br />

#### Store

Combines all reducers and apply thunk (middleware that allows
you to return functions).

#### Constants

Just holds the constants names.

#### Actions

Explain... Fetches API and dispatches...

#### Reducers

Explain... Takes previous state and action, and returns next
state

#### Screens

useDispatch & useSelector from &apos;react-redux&apos;

<!-- Screenshots -->
