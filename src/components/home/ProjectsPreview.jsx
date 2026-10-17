import { motion } from "framer-motion";
import { LuMapPin, LuArrowUpRight } from "react-icons/lu";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SecondaryButton from "@/components/common/SecondaryButton";
import AsyncBoundary from "@/components/common/AsyncBoundary";
import Image from "@/components/common/Image";
import { SkeletonGrid } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getProjects } from "@/services/projectsService";
import { staggerContainer, fadeUp } from "@/utils/motionVariants";

export default function ProjectsPreview() {
  const { data: projects, loading, error, refetch } = useAsync(getProjects);
  if (!loading && !error && projects?.length === 0) return null;

  return (
    <Section className="bg-ice/40">
      <Container>
        <SectionHeading
          eyebrow="Recent Work"
          title="Projects delivered across the city."
          align="left"
        />
        <AsyncBoundary
          loading={loading}
          error={error}
          data={projects}
          onRetry={refetch}
          emptyType="projects"
          skeleton={<SkeletonGrid count={2} className="grid grid-cols-1 gap-6 md:grid-cols-2" />}
        >
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects?.slice(0, 2).map((p) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image src={p.image} alt={`${p.title}, ${p.location}`} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-mono-spec text-xs uppercase tracking-widest text-amber">{p.year}</span>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-white/70">
                  <LuMapPin size={14} aria-hidden="true" /> {p.location}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
        </AsyncBoundary>
        <div className="mt-12 flex justify-start">
          <SecondaryButton to="/projects" icon={LuArrowUpRight}>View All Projects</SecondaryButton>
        </div>
      </Container>
    </Section>
  );
}
