import { motion } from "framer-motion";
import { LuFactory, LuRuler, LuBadgeCheck, LuHeadset } from "react-icons/lu";
import { SITE } from "@/constants/site";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { staggerContainer, fadeUp } from "@/utils/motionVariants";

const reasons = [
  { icon: LuFactory, title: "In-house Fabrication", text: "Profiles and glass processed at our own facility — no third-party delays." },
  { icon: LuRuler, title: "Precision Fitting", text: "Every opening is surveyed and cut to millimetre tolerance before install." },
  { icon: LuBadgeCheck, title: "Certified Materials", text: "Profiles and toughened glass sourced from certified, tested suppliers." },
  { icon: LuHeadset, title: "Ongoing Support", text: "Post-installation servicing and warranty support, not just a one-time sale." },
];

export default function WhyChooseUs() {
  return (
    <Section dark className="pane-grid-bg-dark relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow={`Why ${SITE.shortName}`}
          title="Built by fabricators, not just sellers."
          description="We control the process end-to-end, so what you're quoted is what gets installed."
          light
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              className="rounded-xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:bg-white/10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-amber/15 text-amber">
                <r.icon size={24} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-white/60">{r.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
