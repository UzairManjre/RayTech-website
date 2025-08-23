import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';

import ServicesList from '../components/ServicesList';
import AboutUsHighlight from '../components/AboutUsHighlight';
import ProjectShowcase from '../components/ProjectShowcase';

import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Your partner in digital growth" />
  <ServicesList />
  <AboutUsHighlight />

  <FinalCTA />
  <Footer />
    </main>
  );
}
