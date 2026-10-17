import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import AsyncBoundary from "@/components/common/AsyncBoundary";
import { SkeletonGrid } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getProjects } from "@/services/projectsService";
import { staggerContainer } from "@/utils/motionVariants";

export default function Projects() {
  const { data: projects, loading, error, refetch } = useAsync(getProjects);
  return (
    <>
      <SEO title="Projects" path="/projects" description="Residential and commercial window, door and glass projects completed by our team." />
      <PageHeader
        eyebrow="Our Projects"
        title="Delivered across residential and commercial sites."
        description="A sample of the work completed by our design and installation teams."
      />
      <Section>
        <Container>
          <AsyncBoundary
            loading={loading}
            error={error}
            data={projects}
            onRetry={refetch}
            emptyType="projects"
            skeleton={<SkeletonGrid count={4} className="grid grid-cols-1 gap-8 md:grid-cols-2" />}
          >
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              {projects?.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          </AsyncBoundary>
        </Container>
      </Section>
    </>
  );
}
