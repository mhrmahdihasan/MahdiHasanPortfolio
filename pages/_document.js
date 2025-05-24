// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        {/* Plugin CSS */}
        <link href="/static/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/plugin/et-line/style.css" rel="stylesheet" />
        <link href="/static/plugin/themify-icons/themify-icons.css" rel="stylesheet" />
        <link href="/static/plugin/owl-carousel/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="/static/plugin/magnific/magnific-popup.css" rel="stylesheet" />
        <link href="/static/plugin/scroll/jquery.mCustomScrollbar.min.css" rel="stylesheet" />

        {/* Theme CSS */}
        <link href="/static/css/style.css" rel="stylesheet" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

      </Head>
      <body className='`${inter.variable} ${poppins.variable} ${bebas.variable} font-sans`'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
