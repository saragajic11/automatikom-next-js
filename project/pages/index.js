
import { Inter } from '@next/font/google'
import MainPage from '../components/MainPage'
import { useContext, useEffect } from 'react';
import LoaderContext from '../context/LoaderContext';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {setLoading} = useContext(LoaderContext);
    

  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
          setLoading(false)
      }, 3000);
  }, [])


  return (
    <MainPage />
  )
}
