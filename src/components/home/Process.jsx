import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { staggerContainer, fadeUp } from "@/utils/motionVariants";

const steps = [
  { number: "01", title: "Site Survey", text: "Our team measures every opening and assesses structural conditions on site, free of charge." },
  { number: "02", title: "Design & Quote", text: "We recommend a profile and glass spec suited to your budget and climate, with a transparent quote." },
  { number: "03", title: "Fabrication", text: "Frames and glass are cut, welded and toughened in-house to your exact measurements." },
  { number: "04", title: "Installation", text: "A dedicated crew installs and seals every unit, then walks you through the finished work." },
];

export default function Process() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Four steps from survey to handover."
        />
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-fg/10 lg:block" />
          {steps.map((s) => (
            <motion.div key={s.number} variants={fadeUp} className="relative">
              <span className="font-mono-spec text-4xl font-semibold text-link/20">{s.number}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-fg">{s.title}</h3>
              <p className="mt-2 text-sm text-steel">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
