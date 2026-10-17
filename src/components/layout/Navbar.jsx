import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import PrimaryButton from "@/components/common/PrimaryButton";
import ThemeToggle from "@/components/common/ThemeToggle";
import Container from "./Container";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-card/95 shadow-md" : "bg-card shadow-sm"
      }`}
    >
      <Container>
        <nav aria-label="Primary" className="flex h-20 items-center justify-between">
          <Logo onClick={() => setOpen(false)} />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative font-medium text-sm tracking-wide transition-colors ${
                      isActive ? "text-link" : "text-fg/80 hover:text-link"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative py-1">
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 h-[2px] w-full bg-amber"
                        />
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <PrimaryButton to="/contact" className="!py-2.5 !px-5 text-sm">
              Get Quote
            </PrimaryButton>
            <ThemeToggle />
          </div>

          <div className="relative z-[60] flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="text-fg"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <LuX size={26} /> : <LuMenu size={26} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-40 flex w-[80%] max-w-sm flex-col bg-card px-8 pt-28 pb-10 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `font-display text-2xl font-semibold ${isActive ? "text-link" : "text-fg"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <PrimaryButton to="/contact" onClick={() => setOpen(false)} className="w-full">
                Get Quote
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-ink/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
