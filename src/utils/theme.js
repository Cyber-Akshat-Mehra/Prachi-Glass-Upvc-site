/**
 * Theme store. The <html> element's `dark` class is the single source of truth.
 * Saved choice lives in localStorage ("light" | "dark"); with no saved choice the
 * site follows the system preference. index.html applies the class before first paint.
 */
const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";
const listeners = new Set();

const root = () => document.documentElement;

export function getStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

const systemTheme = () => (window.matchMedia(DARK_QUERY).matches ? "dark" : "light");

export const getTheme = () => (root().classList.contains("dark") ? "dark" : "light");

function apply(theme) {
  root().classList.toggle("dark", theme === "dark");
  listeners.forEach((listener) => listener());
}

export function setTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode etc.): the choice still applies for this visit.
  }
  apply(theme);
}

export function subscribeToTheme(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Keeps the page in sync with OS changes (when nothing is saved) and other tabs. Call once at startup. */
export function initThemeSync() {
  window.matchMedia(DARK_QUERY).addEventListener("change", () => {
    if (!getStoredTheme()) apply(systemTheme());
  });
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) apply(getStoredTheme() ?? systemTheme());
  });
}
