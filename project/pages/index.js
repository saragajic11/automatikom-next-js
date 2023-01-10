import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import CarouselContainer from '../Components/CarouselContainer'
import AboutUs from '../Components/AboutUs';
import Team from '../Components/Team';
import ContactUs from '../Components/ContactUs';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id="main-container">
        <Header />
        <CarouselContainer />
        <AboutUs />
        <Team />
        <ContactUs />

    </div>
  )
}
