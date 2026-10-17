import { Link } from "react-router-dom";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display font-semibold transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS = {
  primary:
    "bg-amber text-ink hover:bg-amber-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber/30 active:translate-y-0",
  secondary: "border-2 border-fg/20 text-fg hover:bg-fg hover:text-surface",
  secondaryLight: "border-2 border-white/40 text-white hover:bg-white hover:text-ink",
};

export default function Button({ variant = "primary", to, href, icon: Icon, className = "", children, ...rest }) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const content = (
    <>
      {children}
      {Icon && <Icon size={18} aria-hidden="true" />}
    </>
  );
  if (to) return <Link to={to} className={classes} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={classes} {...rest}>{content}</a>;
  return <button type="button" className={classes} {...rest}>{content}</button>;
}
