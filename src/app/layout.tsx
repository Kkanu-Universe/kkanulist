'use client';

import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18nextConfig from '@/next-i18next.config';

import Layout from '@block/Layout';

import '@const/globalStyles.css';

interface IApp extends AppProps {
  children: React.ReactNode;
}

function AppLayout({ children }: IApp) {
  return (
    <html>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <title>KKANULIST</title>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export default appWithTranslation(AppLayout, nextI18nextConfig);