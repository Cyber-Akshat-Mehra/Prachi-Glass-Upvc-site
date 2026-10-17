import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import Accordion from "@/components/common/Accordion";
import AsyncBoundary from "@/components/common/AsyncBoundary";
import { SkeletonBase } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getFaqs } from "@/services/faqsService";

export default function FAQ() {
  const { data: faqs, loading, error, refetch } = useAsync(getFaqs);
  return (
    <Section className="bg-ice/40">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions, answered." />
          <AsyncBoundary
            loading={loading}
            error={error}
            data={faqs}
            onRetry={refetch}
            skeleton={<SkeletonBase className="h-64 w-full" />}
          >
            <Accordion items={faqs ?? []} />
          </AsyncBoundary>
        </div>
      </Container>
    </Section>
  );
}
