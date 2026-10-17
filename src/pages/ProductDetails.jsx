import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuCheck, LuArrowLeft } from "react-icons/lu";
import SEO from "@/components/seo/SEO";
import { productSchema } from "@/components/seo/schemas";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import ProductCard from "@/components/products/ProductCard";
import Image from "@/components/common/Image";
import ErrorState from "@/components/common/ErrorState";
import { SkeletonProduct } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getProductById, getRelatedProducts } from "@/services/productsService";
import { fadeUp, fadeLeft, fadeRight } from "@/utils/motionVariants";

function ProductView({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const { data: related } = useAsync(() => getRelatedProducts(product), product.id);

  return (
    <>
      <SEO
        title={product.name}
        path={`/products/${product.id}`}
        description={product.shortDescription}
        image={product.image}
        jsonLd={productSchema(product)}
      />
      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div variants={fadeLeft} initial="hidden" animate="visible">
          <div className="overflow-hidden rounded-xl border border-fg/10">
            <Image eager src={product.gallery[activeImage]} alt={product.name} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="mt-4 flex gap-3">
            {product.gallery.map((img, i) => (
              <button
                key={img}
                type="button"
                aria-label={`Show image ${i + 1} of ${product.gallery.length}`}
                aria-pressed={activeImage === i}
                onClick={() => setActiveImage(i)}
                className={`overflow-hidden rounded-lg border-2 ${activeImage === i ? "border-royal" : "border-transparent"}`}
              >
                <Image src={img} alt="" className="h-20 w-24 object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeRight} initial="hidden" animate="visible">
          <span className="font-mono-spec text-xs uppercase tracking-[0.2em] text-link">{product.category}</span>
          <h1 className="mt-2 font-display text-3xl font-bold text-fg md:text-4xl">{product.name}</h1>
          <p className="mt-4 text-steel">{product.description}</p>

          <h2 className="mt-8 font-display font-semibold text-fg">Features</h2>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-steel">
                <LuCheck size={16} aria-hidden="true" className="shrink-0 text-amber-dark" /> {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-display font-semibold text-fg">Specifications</h2>
          <dl className="mt-3 divide-y divide-fg/10 border-y border-fg/10 font-mono-spec text-sm">
            {product.specifications.map((s) => (
              <div key={s.label} className="flex justify-between py-2.5">
                <dt className="text-steel">{s.label}</dt>
                <dd className="font-medium text-fg">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <PrimaryButton to={`/contact?product=${encodeURIComponent(product.category)}`}>Enquire About This Product</PrimaryButton>
          </div>
        </motion.div>
      </div>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 rounded-xl bg-ice/50 p-8"
      >
        <h2 className="font-display text-xl font-semibold text-fg">Benefits</h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {product.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-steel">
              <LuCheck size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-link" /> {b}
            </li>
          ))}
        </ul>
      </motion.section>

      {related?.length > 0 && (
        <section className="mt-20" aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-display text-2xl font-bold text-fg">Related Products</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, loading, error, refetch } = useAsync(() => getProductById(id), id);

  return (
    <Section className="pt-32 md:pt-36">
      <Container>
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-steel hover:text-link">
          <LuArrowLeft size={16} aria-hidden="true" /> Back to Products
        </Link>
        {loading && <div className="mt-8"><SkeletonProduct /></div>}
        {error && <div className="mt-8"><ErrorState error={error} onRetry={refetch} /></div>}
        {product && <ProductView key={product.id} product={product} />}
      </Container>
    </Section>
  );
}
