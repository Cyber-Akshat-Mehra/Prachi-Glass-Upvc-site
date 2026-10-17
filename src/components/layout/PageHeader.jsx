import { motion } from "framer-motion";
import Container from "./Container";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink pane-grid-bg pt-40 pb-20 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <span className="font-mono-spec text-xs uppercase tracking-[0.25em] text-amber">{eyebrow}</span>
          )}
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h1>
          {description && <p className="mt-4 max-w-xl text-white/70">{description}</p>}
        </motion.div>
      </Container>
    </section>
  );
}
