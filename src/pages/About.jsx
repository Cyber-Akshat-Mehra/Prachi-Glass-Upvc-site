import SEO from "@/components/seo/SEO";
import PageHeader from "@/components/layout/PageHeader";
import CompanyIntro from "@/components/home/CompanyIntro";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import CallToAction from "@/components/home/CallToAction";

export default function About() {
  return (
    <>
      <SEO title="About" path="/about" description="Learn about Prachi Glass & uPVC — fabricating and installing uPVC, aluminium and glass systems in Noida." />
      <PageHeader
        eyebrow="About Us"
        title="A decade of framing, sealing and glazing."
        description="Prachi Glass & uPVC fabricates and installs uPVC, aluminium and glass systems for homes and businesses across Noida."
      />
      <CompanyIntro />
      <WhyChooseUs />
      <Process />
      <CallToAction />
    </>
  );
}
