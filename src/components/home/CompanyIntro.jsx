import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { SITE } from "@/constants/site";
import Container from "@/components/layout/Container";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/utils/motionVariants";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Projects Completed" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "24/7", label: "Support" },
];

export default function CompanyIntro() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop"
                alt="Installation team fitting a window"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-royal p-6 text-white shadow-xl sm:block">
              <p className="font-display text-3xl font-bold">10+</p>
              <p className="font-mono-spec text-xs uppercase tracking-widest text-white">Years in business</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className="font-mono-spec text-xs uppercase tracking-[0.25em] text-link">About {SITE.shortName}</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-fg md:text-4xl">
              One team, from measurement to final seal.
            </h2>
            <p className="mt-5 text-steel">
              We fabricate uPVC and aluminium profiles in-house and pair them with toughened glass processed to your exact specification. That means fewer handoffs, tighter tolerances, and a single point of accountability from site survey to handover.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-display font-semibold text-fg">Our Mission</h4>
                <p className="mt-1 text-sm text-steel">Deliver window and glass systems that perform for decades, not just at handover.</p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-fg">Our Vision</h4>
                <p className="mt-1 text-sm text-steel">Become the region's most trusted name in fabricated glass and framing systems.</p>
              </div>
            </div>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="rounded-xl border border-fg/10 bg-frost p-4 text-center transition-shadow hover:shadow-md"
                >
                  <p className="font-display text-xl font-bold text-link md:text-2xl">{s.value}</p>
                  <p className="mt-1 text-xs text-steel">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
