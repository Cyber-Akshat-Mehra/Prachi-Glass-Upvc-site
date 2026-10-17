import { SERVICE_ICONS, DEFAULT_SERVICE_ICON } from "@/constants/icons";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import AsyncBoundary from "@/components/common/AsyncBoundary";
import { SkeletonGrid } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getServices } from "@/services/servicesService";
import { staggerContainer, fadeUp } from "@/utils/motionVariants";

export default function ServicesGrid() {
  const { data: services, loading, error, refetch } = useAsync(getServices);
  return (
    <Section className="bg-ice/40">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Complete framing & glass systems, under one roof."
          description="From the first measurement to the final seal, every product line is fabricated and installed by our own team."
        />
        <AsyncBoundary
          loading={loading}
          error={error}
          data={services}
          onRetry={refetch}
          skeleton={<SkeletonGrid count={8} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" />}
        >
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services?.map((s) => {
            const Icon = SERVICE_ICONS[s.icon] ?? DEFAULT_SERVICE_ICON;
            return (
              <motion.div
                key={s.id}
                variants={fadeUp}
                className="group rounded-xl border border-fg/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-royal/30 hover:shadow-xl hover:shadow-royal/5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-royal/10 text-link transition-colors duration-300 group-hover:bg-royal group-hover:text-white">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-fg">{s.title}</h3>
                <p className="mt-2 text-sm text-steel">{s.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
        </AsyncBoundary>
      </Container>
    </Section>
  );
}
