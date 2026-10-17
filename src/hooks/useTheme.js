import { useCallback, useSyncExternalStore } from "react";
import { getTheme, setTheme, subscribeToTheme } from "@/utils/theme";

export function useTheme() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => "light");
  const toggleTheme = useCallback(() => setTheme(getTheme() === "dark" ? "light" : "dark"), []);
  return { theme, isDark: theme === "dark", toggleTheme };
}
