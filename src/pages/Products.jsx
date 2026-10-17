import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/products/ProductCard";
import FilterTabs from "@/components/common/FilterTabs";
import AsyncBoundary from "@/components/common/AsyncBoundary";
import { SkeletonGrid } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getProducts } from "@/services/productsService";
import { staggerContainer } from "@/utils/motionVariants";

const ALL = "All";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: products, loading, error, refetch } = useAsync(getProducts);

  const categories = useMemo(() => [ALL, ...new Set((products ?? []).map((p) => p.category))], [products]);
  const requested = searchParams.get("category");
  const active = requested && categories.includes(requested) ? requested : ALL;

  const filtered = useMemo(
    () => (active === ALL ? products : products?.filter((p) => p.category === active)),
    [products, active]
  );

  const handleFilter = (cat) => setSearchParams(cat === ALL ? {} : { category: cat });

  return (
    <>
      <SEO
        title="Products"
        path="/products"
        description="Browse uPVC and aluminium windows and doors, glass partitions, shower cubicles and glass railings."
      />
      <PageHeader
        eyebrow="Our Range"
        title="Products built for every opening."
        description="Filter by category to find the right window, door or glass system for your project."
      />
      <Section>
        <Container>
          {!loading && !error && (
            <FilterTabs label="Filter products by category" options={categories} active={active} onChange={handleFilter} />
          )}
          <AsyncBoundary
            loading={loading}
            error={error}
            data={filtered}
            onRetry={refetch}
            emptyType="products"
            skeleton={<SkeletonGrid count={6} />}
          >
            <motion.div
              key={active}
              variants={staggerContainer(0.06)}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered?.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          </AsyncBoundary>
        </Container>
      </Section>
    </>
  );
}
