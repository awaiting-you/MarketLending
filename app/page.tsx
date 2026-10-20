import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Cases from "./components/Cases";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Pricing />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
