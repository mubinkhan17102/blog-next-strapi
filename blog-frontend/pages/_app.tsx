import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <div className='container mx-auto font-sans'>
        <NextNProgress />
        <Navbar/>
        <main>
          <Component {...pageProps}/>
        </main>
        <Footer/>
      </div>
    </>
  ) 
}

export default MyApp
