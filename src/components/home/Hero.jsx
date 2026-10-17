import { motion } from "framer-motion";
import { LuArrowRight, LuMoveRight } from "react-icons/lu";
import Image from "@/components/common/Image";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-20">
      <div className="absolute inset-0">
        <Image
          eager
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 pane-grid-bg" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-spec inline-block rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-amber"
          >
            uPVC · Aluminium · Glass Systems
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Windows and doors,
            <br />
            <span className="text-amber">engineered to last.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-white/70"
          >
            We design, fabricate and install uPVC and aluminium windows, doors, toughened glass and railing systems — built for real weather, real budgets, and real deadlines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <PrimaryButton to="/contact" icon={LuArrowRight}>Get Free Quote</PrimaryButton>
            <SecondaryButton to="/products" light icon={LuMoveRight}>Explore Products</SecondaryButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-4 font-mono-spec text-sm text-white/50"
          >
            <span>10+ Years</span>
            <span>5000+ Projects</span>
            <span>10,000+ Customers</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
