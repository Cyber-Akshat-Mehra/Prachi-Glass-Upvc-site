import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Lightbox({ images, index, onIndexChange, onClose }) {
  const closeRef = useRef(null);
  const isOpen = index !== null && Boolean(images[index]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [isOpen, index, images.length, onClose, onIndexChange]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/95 p-6"
          onClick={onClose}
        >
          <button ref={closeRef} type="button" aria-label="Close image viewer" onClick={onClose} className="absolute right-6 top-6 text-white/80 hover:text-white">
            <LuX size={28} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index - 1 + images.length) % images.length);
            }}
            className="absolute left-4 text-white/80 hover:text-white md:left-8"
          >
            <LuChevronLeft size={32} aria-hidden="true" />
          </button>
          <motion.img
            key={images[index].id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={images[index].src}
            alt={images[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index + 1) % images.length);
            }}
            className="absolute right-4 text-white/80 hover:text-white md:right-8"
          >
            <LuChevronRight size={32} aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
