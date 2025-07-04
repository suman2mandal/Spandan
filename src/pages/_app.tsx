import '@/app/globals.css'
import type { AppProps } from 'next/app'
import TopNavBar from '@/components/topNavBar'
import Footer from '@/components/bottomFooter'
import Wrapper from '@/components/wrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className="min-h-screen bg-white text-black">
      <TopNavBar />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </div>
    </>
  )
}