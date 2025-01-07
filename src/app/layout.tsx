'use client';

import Layout from '@block/Layout';

interface IApp {
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

export default AppLayout;