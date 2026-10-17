import { memo } from "react";
import { motion } from "framer-motion";
import { LuMapPin, LuCalendar } from "react-icons/lu";
import Image from "@/components/common/Image";
import { fadeUp } from "@/utils/motionVariants";

function ProjectCard({ project }) {
  return (
    <motion.article variants={fadeUp} className="overflow-hidden rounded-xl border border-fg/10 transition-shadow hover:shadow-xl">
      <Image src={project.image} alt={`${project.title}, ${project.location}`} className="aspect-[16/9] w-full object-cover" />
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-4 font-mono-spec text-xs uppercase tracking-wide text-steel">
          <span className="flex items-center gap-1.5"><LuMapPin size={14} aria-hidden="true" /> {project.location}</span>
          <span className="flex items-center gap-1.5"><LuCalendar size={14} aria-hidden="true" /> {project.year}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-fg">{project.title}</h3>
        <p className="mt-2 text-sm text-steel">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Products used">
          {project.productsUsed.map((prod) => (
            <li key={prod} className="rounded-full bg-royal/10 px-3 py-1 text-xs font-medium text-link">{prod}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default memo(ProjectCard);
