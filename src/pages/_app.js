import Head from 'next/head';
import '../styles/globals.css'; // or your global stylesheet

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PRISEC | Research and Development</title>
        <meta
          name="description"
          content="PRISEC is a powerhouse of data and development, focused on socio-economic research and sustainable projects in Pakistan."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="PRISEC, socio-economic research, biogas projects, sustainable development, Pakistan"
        />
        <meta name="author" content="PRISEC Team" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="PRISEC | Research and Development" />
        <meta
          property="og:description"
          content="Creating sustainable value through data and research in Pakistan."
        />
        <meta property="og:image" content="/meta-banner.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
