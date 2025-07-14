import Head from 'next/head';
import Footer from '@/components/basic-component/bottomFooter';
import Carousel from '@/components/Carousel';
import CTA from '@/components/CTAs/landingpageCTA';
import Testimonials from '@/components/testimonials';
import ImpactSection from '@/components/impactSection';

export default function Home() {

  return (
    <>
      <Head>
        <title>Spandan | Be the voice for voiceless</title>
        <meta name="description" content="Spandan - An animal welfare NGO. Be the voice for voiceless." />
      </Head>

      <div className="min-h-screen bg-white text-black">
        <div id="home">
        <Carousel />
        <ImpactSection/>
        <Testimonials/>
        <CTA/>
        </div>
        <Footer />
      </div>
    </>
  )
}
