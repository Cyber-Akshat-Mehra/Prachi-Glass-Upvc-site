import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import ProductCard from "@/components/products/ProductCard";
import SecondaryButton from "@/components/common/SecondaryButton";
import AsyncBoundary from "@/components/common/AsyncBoundary";
import { SkeletonGrid } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getProducts } from "@/services/productsService";
import { staggerContainer } from "@/utils/motionVariants";

export default function FeaturedProducts() {
  const { data, loading, error, refetch } = useAsync(getProducts);
  const featured = data?.slice(0, 4);
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Featured Products"
          title="A closer look at our best-fitted systems."
          description="Each product is fabricated to order and matched to your building's structural and climate needs."
        />
        <AsyncBoundary
          loading={loading}
          error={error}
          data={featured}
          onRetry={refetch}
          emptyType="products"
          skeleton={<SkeletonGrid count={4} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" />}
        >
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featured?.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </motion.div>
        </AsyncBoundary>
        <div className="mt-12 flex justify-center">
          <SecondaryButton to="/products">View All Products</SecondaryButton>
        </div>
      </Container>
    </Section>
  );
}
