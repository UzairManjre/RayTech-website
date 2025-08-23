import Navbar from '../components/Navbar';
import MissionHero from '../components/MissionHero';
import MissionStatement from '../components/MissionStatement';
import CoreValues from '../components/CoreValues';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function MissionPage() {
  return (
    <main>
      <Navbar />
      <MissionHero />
      <MissionStatement />
      <CoreValues />
      <FinalCTA />
      <Footer />
    </main>
  );
}
