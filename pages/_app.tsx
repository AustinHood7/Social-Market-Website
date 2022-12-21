import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Home from '../components/Home'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}