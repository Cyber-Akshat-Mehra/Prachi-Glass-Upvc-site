import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";
import PrimaryButton from "@/components/common/PrimaryButton";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" path="/404" />
      <section className="flex min-h-screen items-center justify-center bg-ink pane-grid-bg pt-20 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <span aria-hidden="true" className="font-display text-8xl font-bold text-amber">404</span>
            <h1 className="mt-4 font-display text-2xl font-bold md:text-3xl">This opening doesn't exist.</h1>
            <p className="mt-3 max-w-md text-white/60">
              The page you're looking for may have moved or never existed. Let's get you back on track.
            </p>
            <div className="mt-8">
              <PrimaryButton to="/">Back to Home</PrimaryButton>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
