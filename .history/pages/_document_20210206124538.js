import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#1a1a1a" />
            <link
              rel="preload"
              href="/assets/fonts/Roboto-Regular.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/assets/fonts/Roboto-Bold.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/assets/fonts/Roboto-Black.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/assets/fonts/Roboto-Medium.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/assets/fonts/Roboto-Light.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/assets/fonts/Roboto-Thin.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/assets/fonts/Oswald-Regular.ttf"
              as="font"
              crossOrigin=""
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument