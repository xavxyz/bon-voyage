// @flow
import * as React from 'react';
import NextHead from 'next/head';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { GA_TRACKING_ID },
} = getConfig();

export default function Head() {
  return (
    <NextHead>
      <title>Bon Voyage — by Xavier Cazalot</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@xavczen" />
      <meta name="twitter:title" content="Bon Voyage - by Xavier Cazalot" />
      <meta
        name="twitter:description"
        content="My adventures, over the years, over the world."
      />
      <meta
        name="twitter:image"
        content="https://bon-voyage.now.sh/static/bon-voyage.png"
      />
      <meta name="twitter:creator" content="@xavczen" />

      <meta
        property="og:image"
        content="https://bon-voyage.now.sh/static/bon-voyage.png"
      />
      <meta property="og:title" content="Bon Voyage - by Xavier Cazalot" />
      <meta property="og:url" content="https://bon-voyage.now.sh" />
      <meta property="og:site_name" content="Bon Voyage" />
      <meta
        property="og:description"
        content="My adventures, over the years, over the world."
      />

      <meta
        name="description"
        content="My adventures, over the years, over the world."
      />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </NextHead>
  );
}
