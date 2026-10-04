import { About } from "@/components/About";
import { Commitments } from "@/components/Commitments";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Commitments />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
