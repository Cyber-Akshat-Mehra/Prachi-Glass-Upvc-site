import { useCallback, useMemo, useState } from "react";
import SEO from "@/components/seo/SEO";
import PageHeader from "@/components/layout/PageHeader";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Image from "@/components/common/Image";
import FilterTabs from "@/components/common/FilterTabs";
import AsyncBoundary from "@/components/common/AsyncBoundary";
import Lightbox from "@/components/gallery/Lightbox";
import { SkeletonGallery } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getProducts } from "@/services/productsService";

const ALL = "All";

export default function Gallery() {
  const { data: products, loading, error, refetch } = useAsync(getProducts);
  const [active, setActive] = useState(ALL);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = useMemo(
    () =>
      (products ?? []).flatMap((p) =>
        p.gallery.map((src, i) => ({
          src,
          category: p.category,
          id: `${p.id}-${i}`,
          alt: `${p.name} installation, view ${i + 1}`,
        }))
      ),
    [products]
  );
  const categories = useMemo(() => [ALL, ...new Set((products ?? []).map((p) => p.category))], [products]);
  const filtered = useMemo(() => (active === ALL ? images : images.filter((g) => g.category === active)), [images, active]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const handleFilter = (cat) => {
    setActive(cat);
    setLightboxIndex(null);
  };

  return (
    <>
      <SEO title="Gallery" path="/gallery" description="A closer look at the windows, doors, partitions and glass work we install." />
      <PageHeader eyebrow="Gallery" title="Finished work, in detail." description="A closer look at the frames, seals and glass we install every day." />
      <Section>
        <Container>
          {!loading && !error && (
            <FilterTabs label="Filter gallery by category" options={categories} active={active} onChange={handleFilter} />
          )}
          <AsyncBoundary loading={loading} error={error} data={filtered} onRetry={refetch} emptyType="gallery" skeleton={<SkeletonGallery />}>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
              {filtered.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  aria-label={`Open image: ${img.alt}`}
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full overflow-hidden rounded-xl"
                >
                  <Image src={img.src} alt={img.alt} className="w-full object-cover transition-transform duration-500 hover:scale-105" />
                </button>
              ))}
            </div>
          </AsyncBoundary>
        </Container>
      </Section>
      <Lightbox images={filtered} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={closeLightbox} />
    </>
  );
}
