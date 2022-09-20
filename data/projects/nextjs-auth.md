---
  title: Next.js Authentication
  tech:
    - React
    - Next.js
  description: >-
    Next.js project using next-auth library and JWT to handle authentication.
  liveLink: https://nextjs-authentication-eight.vercel.app/
  githubLink: https://github.com/renebitter/nextjs-authentication
  image: nextjs-auth.png
  isFeatured: false
---

## Description

Project built using next-auth library to handle authentication.

- SessionProvider
- useSession
- getSession
- CredentialsProvider
- JWT & bcryptjs (for password hashing)
- Mongodb
- HTTP requests sent using fetch

### Next-auth:

- 'SessionProvider'
  Contains the 'session context' and is exposed at the top level of the application '\_app.js'.
  'SessionProvider session={pageProps.session}' This will skip the 'session http request' on 'profile.js' since it's provided by 'getServerSideProps(context)' on 'profile.js'.
  'auth.js' will send this 'session http request' since it does not have a 'getServerSideProps(context)'.

- 'useSession()'
  Frontend - Add React Hook. Checks if someone is signed in. Used in 'main-navigation.js' component.

- 'getSession()'
  Backend - Used to protect the API Route.

- 'CredentialsProvider'
  Manages token creation behind the scenes, 'JWT' (JSON Web Token), used in '/api/auth/[...nextauth]'.
  Needs to be a 'catch all route' because 'next-auth' exposes multiple routes for login, logout and others more.

  <sup>_List of 'next-auth' exposed routes (**that should not be overwritten by your custom ones**): [https://next-auth.js.org/getting-started/rest-api](https://next-auth.js.org/getting-started/rest-api)._</sup>
  <sup>_Other providers overview: [https://next-auth.js.org/providers/](https://next-auth.js.org/providers/)_</sup>

#### Next:

- 'getServerSideProps()' fetches data from server on each request. Needed for 'profile.js' page, since it needs to verify if the user is authorized. It also redirects the user from 'profile.js' to 'auth.js' if the user is not authorized, thus keeping 'profile.js' only visible to authorized users.

- 'useRouter()' for redirects. (e.g.: after login/logout 'router.replace('/')').

#### React:

- 'useRef()' for capturing input in forms (e.g.: e-mail, password, etc.)

- 'useState()' for setting and using state (e.g.: loading, error messages, request status like 'pending/success/error')

- 'useEffect()' for setting timeout (e.g.: notification); check for session/authentication 'auth.js'

#### Others:

- 'bcryptjs' used for hashing and comparing passwords.

- 'MongoClient' for database connection.

#### HTTP requests sent using 'fetch':

- 'POST' to send login data.

- 'PATCH' to change password.

#### Observations/Improvements:

- 'getStaticProps()' could be implemented for additional content like a list of products and 'getStaticPaths()' for accounting for dynamic pages with e.g. PDP (product detail pages). This would be outside of the scope of this 'next-auth' project though.

#### Misc:

Setting an 'input' 'type' from '"password"' to '"text"' shows the typed in password.

##### 'getServerSideProps()' 'redirect'

Only redirects after reloading the page or explicitly typing the URL. Thus the need to define the redirect in the component to redirect it automatically after login.

'getServerSideProps()' example! on 'auth.js' page, in an attempt to redirect to 'profile.js' page after logging in. Doesn't work.
