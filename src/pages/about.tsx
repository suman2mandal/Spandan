import Head from 'next/head';
import AboutHero from '@/components/about-hero';
import OurValuesSection from '@/components/our-values-section';
import InfoCards from '@/components/infoCards';

export default function AboutPage() {
  return (
    <>
        <Head>
          <title>About | Spandan</title>
        </Head>
        <AboutHero />
        
        {/* Our values and mission */}
        <OurValuesSection />
        <InfoCards/>
        {/* Meet the Team */}
        {/* FAQs */}
        {/* Financial Information(Monthly Payment) */}
        
    </>
  )
}
