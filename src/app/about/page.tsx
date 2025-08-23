import Navbar from '../components/Navbar';
import AboutHero from '../components/AboutHero';
import Footer from '../components/Footer';
import OurMission from '../components/OurMission';
// Import other "About Us" sections here later, like TeamSection, MissionStatement, etc.

export default function AboutPage() {
  return (
    <main>
      <Navbar />
  <AboutHero />
  <OurMission />

      <Footer />
    </main>
  );
}
