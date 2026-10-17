import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { LuStar, LuMapPin } from "react-icons/lu";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import AsyncBoundary from "@/components/common/AsyncBoundary";
import Image from "@/components/common/Image";
import { SkeletonGrid } from "@/components/common/skeletons";
import { useAsync } from "@/hooks/useAsync";
import { getTestimonials } from "@/services/testimonialsService";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const { data: testimonials, loading, error, refetch } = useAsync(getTestimonials);
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What homeowners and teams say."
        />
        <AsyncBoundary
          loading={loading}
          error={error}
          data={testimonials}
          onRetry={refetch}
          emptyType="testimonials"
          skeleton={<SkeletonGrid count={3} />}
        >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-14!"
        >
          {testimonials?.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="flex h-full flex-col rounded-xl border border-fg/10 bg-frost p-7">
                <div className="flex gap-1 text-amber" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <LuStar key={i} size={16} aria-hidden="true" fill={i < t.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm text-steel">&ldquo;{t.review}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image src={t.image} alt={`Photo of ${t.name}`} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="font-display text-sm font-semibold text-fg">{t.name}</p>
                    <p className="flex items-center gap-1 text-xs text-steel"><LuMapPin size={12} aria-hidden="true" /> {t.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </AsyncBoundary>
      </Container>
    </Section>
  );
}
