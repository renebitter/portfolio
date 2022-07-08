import '../styles/globals.scss';
import Head from 'next/head';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <div className='app' data-theme={theme}>
        <Navbar theme={setTheme}>
          <Head>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <link rel='shortcut icon' href='/portfolio/favicon.ico' />
          </Head>
          <Component {...pageProps} currentTheme={theme} />
          <Footer />
        </Navbar>
      </div>
    </>
  );
}

export default MyApp;
