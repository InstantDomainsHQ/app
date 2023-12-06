import { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";
import {STRINGS} from "../components/utils/constants";

export default function Document() {
  const title = 'Kalico AI | Audio and Video Repurposing for Content Creators'
  const description = 'Kalico is an AI assistant that helps you instantly create captivating articles from your videos and podcasts.'
  const siteImage = STRINGS.SITE_IMAGE
  const url = 'https://kalico.ai'
      return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <link rel='shortcut icon' href='/favicon.ico' />
          {/*<link rel="manifest" href="/manifest.json" />*/}
          <meta
            name="description"
            content="Kalico"
          />
          <meta
            name="title"
            content={title}
            />
          <meta name="description" content={description}/>

          {/*<!-- Google / Search Engine Tags -->*/}
          <meta itemProp="name" content={title}/>
          <meta itemProp="description" content={description}/>
          <meta itemProp="image" content={siteImage}/>

          {/*<!-- Facebook Meta Tags -->*/}
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
          <meta property="og:image" content={siteImage}/>
          <meta property="og:url" content={url}/>
          <meta property="og:type" content="website"/>

          {/*<!-- Twitter Meta Tags -->*/}
          <meta name="twitter:title" content={title}/>
          <meta name="twitter:description" content={description}/>
          <meta name="twitter:image" content={siteImage}/>
          <meta name="twitter:card" content="summary_large_image"/>
          
          
          
          <meta name="theme-color" content="#fff" />
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="mobile-web-app-capable" content="yes"/>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}

