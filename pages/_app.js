import '../styles/globals.scss';
import Head from 'next/head';
import Navbar from '../components/layout/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Navbar>
    </>
  );
}

export default MyApp;
