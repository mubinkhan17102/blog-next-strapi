import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <div className='container mx-auto font-sans'>
        <nav>This is our nav</nav>
        <main>
          <Component {...pageProps}/>
        </main>
        <footer>This is our footer</footer>
      </div>
    </>
  ) 
}

export default MyApp
