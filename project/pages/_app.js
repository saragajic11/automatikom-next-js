import Footer from "../components/Footer";
import Header from "../components/Header";
import LoaderWrapper from "../components/LoaderWrapper";
import '../public/css/style.css';
import SnackbarWrapper from "../components/SnackbarWrapper";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Automatikom
        </title>
      </Head>
      <LoaderWrapper>
        <SnackbarWrapper>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SnackbarWrapper>
      </LoaderWrapper>
    </>
  );
}
