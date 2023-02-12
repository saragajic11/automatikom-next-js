import Footer from '../components/Footer'
import Header from '../components/Header'
import LoaderWrapper from '../components/LoaderWrapper'
import '../public/css/style.css'
import { ReCaptchaProvider } from "next-recaptcha-v3";
import SnackbarWrapper from '../components/SnackbarWrapper';

export default function App({ Component, pageProps }) {



  return (
    <>
      <LoaderWrapper>
        <SnackbarWrapper>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </SnackbarWrapper>
      </LoaderWrapper>
    </>
  )
}
