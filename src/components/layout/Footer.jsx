import { Link } from "react-router-dom";
import { LuInstagram, LuMapPin, LuPhone, LuMail } from "react-icons/lu";
import { navLinks } from "@/data/navigation";
import { services } from "@/data/services";
import { SITE } from "@/constants/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-ink pane-grid-bg-dark text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label={`${SITE.name} — home`} className="inline-block rounded-xl bg-white p-3">
              <img src="/logo.png" alt={SITE.name} width="120" height="126" className="h-24 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Windows, doors and glass systems engineered for lasting performance — designed, fabricated and installed by one team.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prachi Glass & uPVC on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-colors hover:border-amber hover:bg-amber hover:text-ink"
              >
                <LuInstagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono-spec text-xs uppercase tracking-[0.2em] text-amber mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono-spec text-xs uppercase tracking-[0.2em] text-amber mb-5">Products</h4>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link to={`/products?category=${encodeURIComponent(s.title)}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono-spec text-xs uppercase tracking-[0.2em] text-amber mb-5">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <LuMapPin size={18} className="shrink-0 text-amber" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <LuPhone size={18} className="shrink-0 text-amber" />
                <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <LuMail size={18} className="shrink-0 text-amber" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mullion-divider mt-14 mb-6" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row sm:pr-16">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Noida, Uttar Pradesh</p>
        </div>
      </Container>
    </footer>
  );
}
