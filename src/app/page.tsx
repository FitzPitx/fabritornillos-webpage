import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands"
import Categories from "@/components/Categories";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import CTAFinal from "@/components/CTAFinal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <WhyChooseUs />
      <ProjectsCarousel />
      <Brands />
      <FeaturedProducts />
      <AboutUs />
      <Testimonials />
      <CTAFinal />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
