import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { BentoGrid } from '@/components/bento-grid';
import { Pricing } from '@/components/pricing';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
