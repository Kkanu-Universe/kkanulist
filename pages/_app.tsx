import { useEffect } from 'react';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { useSetAtom } from 'jotai';
import { AppProps } from 'next/app';

import Layout from '@block/Layout';

import { isDarkModeAtom } from '@store/commons/darkmode';

import { cookies } from '@util/common.util';

import './_app.css';

function App({ Component, pageProps }: AppProps) {
  const setIsDarkMode = useSetAtom(isDarkModeAtom);

  useEffect(() => {
    if (document) {
      const isDarkmode = cookies.get('dark');
      setIsDarkMode(isDarkmode === '1');
      document.body.classList[isDarkmode === '1' ? 'add' : 'remove']('dark');
    }
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <title>KKANULIST</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);