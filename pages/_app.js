import { APP_DESCRIPTION, APP_NAME } from "@/utils/config";
import "../styles/globals.css";
import Head from "next/head";
import useEventBus from "event-bus-react";

function MyApp({ Component, pageProps }) {
  useEventBus();
  return (
    <>
      <Head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#252933" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <title>Tiny Note</title>
        <meta name="title" content="Tiny Note" />
        <meta
          name="description"
          content="Simple and effective note taking website."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tiny-note.vercel.app/" />
        <meta property="og:title" content="Tiny Note" />
        <meta
          property="og:description"
          content="Simple and effective note taking website."
        />
        <meta property="og:image" content="/tiny-note-1200-630.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tiny-note.vercel.app/" />
        <meta property="twitter:title" content="Tiny Note" />
        <meta
          property="twitter:description"
          content="Simple and effective note taking website."
        />
        <meta property="twitter:image" content="/tiny-note-1200-630.png" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
