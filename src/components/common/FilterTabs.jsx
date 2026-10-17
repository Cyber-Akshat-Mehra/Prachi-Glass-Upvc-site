export default function FilterTabs({ options, active, onChange, label }) {
  return (
    <div role="group" aria-label={label} className="mb-10 flex flex-wrap gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          aria-pressed={active === opt}
          onClick={() => onChange(opt)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            active === opt
              ? "border-royal bg-royal text-white"
              : "border-fg/15 text-fg/70 hover:border-royal hover:text-link"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
