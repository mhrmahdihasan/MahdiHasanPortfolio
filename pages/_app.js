// pages/_app.js
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import PreLoader from "../src/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Mahdi Hasan - Marketing Specialist</title>
        <meta name="description" content="Digital Marketer & Business Consultant passionate about strategy, growth, and scaling businesses online. Founder of Mhr Tech." />
        {/* Open Graph for Facebook, LinkedIn, etc. */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mahdi Hasan | IT Engineer & Digital Business Specialist" />
        <meta property="og:description" content="Digital Marketer & Business Consultant passionate about strategy, growth, and scaling businesses online." />
        <meta property="og:image" content="/images/FrontPageScreenshot.webp" />
        <meta property="og:url" content="https://www.mahdihasan.me/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mahdi Hasan | IT Engineer & Digital Business Specialist" />
        <meta name="twitter:description" content="Digital Marketer & Business Consultant passionate about strategy, growth, and scaling businesses online." />
        <meta name="twitter:image" content="/images/FrontPageScreenshot.webp" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
