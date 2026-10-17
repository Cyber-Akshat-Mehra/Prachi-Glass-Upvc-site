import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items?.[0]?.id ?? null);

  return (
    <div className="divide-y divide-fg/10 border-y border-fg/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-display text-lg font-semibold text-fg">{item.question}</span>
              <span className={`shrink-0 rounded-full border border-fg/15 p-2 transition-transform duration-300 ${isOpen ? "rotate-45 bg-amber border-amber" : ""}`}>
                <LuPlus size={16} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 max-w-2xl text-steel">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
