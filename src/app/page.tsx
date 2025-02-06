import Hero from '@/components/layout/Hero';
import Navbar from '@/components/layout/Navbar';
import DignitariesSection from '@/components/home/Dignitaries';
import AboutSection from '@/components/home/About';
import StudentCoordinatorsSection from '@/components/home/StudentCoordinators';
import EventsShowcaseSection from '@/components/home/Events';
import ContactSection from '@/components/home/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="dignitaries-section">
        <DignitariesSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="student-coordinators-section">
        <StudentCoordinatorsSection />
      </section>
      <section id="events">
        <EventsShowcaseSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      {/* We'll add other sections here */}
    </main>
  );
}
