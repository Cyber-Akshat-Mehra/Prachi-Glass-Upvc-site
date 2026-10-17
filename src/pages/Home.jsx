import SEO from "@/components/seo/SEO";
import { localBusinessSchema } from "@/components/seo/schemas";
import Hero from "@/components/home/Hero";
import CompanyIntro from "@/components/home/CompanyIntro";
import ServicesGrid from "@/components/home/ServicesGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <>
      <SEO path="/" jsonLd={localBusinessSchema} />
      <Hero />
      <CompanyIntro />
      <ServicesGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <Process />
      <ProjectsPreview />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
}
