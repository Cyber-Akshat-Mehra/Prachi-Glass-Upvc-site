import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-fg/15 text-fg transition-colors hover:border-royal hover:text-link ${className}`}
    >
      {isDark ? <LuMoon size={18} aria-hidden="true" /> : <LuSun size={18} aria-hidden="true" />}
    </button>
  );
}
