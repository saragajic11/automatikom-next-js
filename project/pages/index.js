
import { Inter } from '@next/font/google'
import MainPage from '../components/MainPage'
import { useContext, useEffect } from 'react';
import LoaderContext from '../context/LoaderContext';
import SnackbarContext from '../context/SnackbarContext';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { setLoading } = useContext(LoaderContext);
  const { showMessage } = useContext(SnackbarContext);

  console.log("useContext", useContext(SnackbarContext));


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])


  return (
    <MainPage setLoading={setLoading} showMessage={showMessage} />
  )
}
