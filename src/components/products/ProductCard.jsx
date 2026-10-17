import { memo } from "react";
import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { fadeUp } from "@/utils/motionVariants";

function ProductCard({ product }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-xl border border-fg/10 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.category}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 font-mono-spec text-[11px] uppercase tracking-wide text-link backdrop-blur">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-fg">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-steel">{product.shortDescription}</p>
        <Link
          to={`/products/${product.id}`}
          aria-label={`View details for ${product.name}`}
          className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-link transition-colors group-hover:text-amber-dark"
        >
          View Details <LuArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

export default memo(ProductCard);
