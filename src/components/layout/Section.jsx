export default function Section({ children, className = "", id, dark = false }) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? "bg-ink text-white" : "bg-surface"} ${className}`}
    >
      {children}
    </section>
  );
}
