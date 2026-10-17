import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-royal py-20 pane-grid-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white md:text-4xl">
            Ready to plan your windows, doors or glasswork?
          </h2>
          <p className="max-w-xl text-white/80">
            Book a free site survey and get a detailed quote within 48 hours.
          </p>
          <PrimaryButton to="/contact" icon={LuArrowRight}>Get Free Quote</PrimaryButton>
        </motion.div>
      </Container>
    </section>
  );
}
