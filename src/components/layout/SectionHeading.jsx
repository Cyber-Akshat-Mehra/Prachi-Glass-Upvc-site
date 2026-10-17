import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center", light = false }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${alignment} gap-4 mb-12 md:mb-16`}
    >
      {eyebrow && (
        <span className={`font-mono-spec text-xs tracking-[0.25em] uppercase ${light ? "text-amber" : "text-link"}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight max-w-2xl ${light ? "text-white" : "text-fg"}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-xl text-base md:text-lg ${light ? "text-white/70" : "text-steel"}`}>
          {description}
        </p>
      )}
      <div className="mullion-divider w-16 mt-2" />
    </motion.div>
  );
}
