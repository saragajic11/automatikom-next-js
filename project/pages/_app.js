import Footer from '../components/Footer'
import Header from '../components/Header'
import LoaderWrapper from '../components/LoaderWrapper'
import '../public/css/style.css'
import { ReCaptchaProvider } from "next-recaptcha-v3";

export default function App({ Component, pageProps }) {



  return (
    <>
      <LoaderWrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LoaderWrapper>
    </>
  )
}
