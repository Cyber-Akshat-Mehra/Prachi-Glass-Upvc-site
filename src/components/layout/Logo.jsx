import { Link } from "react-router-dom";
import { SITE } from "@/constants/site";

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex shrink-0 items-center gap-3" aria-label={`${SITE.name} — home`}>
      <img src="/logo-mark.png" alt="" width="34" height="41" className="h-10 w-auto dark:hidden" />
      <img src="/logo-mark-dark.png" alt="" width="34" height="41" className="hidden h-10 w-auto dark:block" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-fg">{SITE.shortName.toUpperCase()}</span>
        <span className="mt-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-link">Glass &amp; uPVC</span>
      </span>
    </Link>
  );
}
