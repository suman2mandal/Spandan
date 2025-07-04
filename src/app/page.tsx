import Head from 'next/head';
import TopNavBar from '@/components/topNavBar';
import Footer from '@/components/bottomFooter';
import Carousel from '@/components/Carousel';
import CTA from '@/components/landingpageCTA';
import Testimonials from '@/components/testimonials';
import ImpactSection from '@/components/impactSection';

export default function Home() {
    
  return (
    <>
    <div className="min-h-screen bg-white text-black">
      <div id="home">
      <TopNavBar/>
      <Carousel />
      <ImpactSection/>
      <Testimonials/>
      <CTA/>
      
      
      </div>
      <Head>
        <title>Spandan | Be the voice for voiceless</title>
        <meta name="description" content="Spandan - An animal welfare NGO. Be the voice for voiceless." />
      </Head>
      
      
      <Footer />
    </div>
    </>
  )
}
