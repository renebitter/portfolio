import '../styles/globals.scss';
import Head from 'next/head';
import Navbar from '../components/layout/navbar';
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
            <link rel='shortcut icon' href='/portfolio-nextjs/favicon.ico' />
          </Head>
          <Component {...pageProps} currentTheme={theme} />
        </Navbar>
      </div>
    </>
  );
}

export default MyApp;
