import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';
import ServicesHighlight from './components/ServicesHighlight';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <ServicesHighlight />
      <Services />
      {/* Other sections like the "Trusted By" section would go here */}
      <FAQ />
      <ContactSection />
  <FinalCTA />
  <Footer />
    </main>
  );
}