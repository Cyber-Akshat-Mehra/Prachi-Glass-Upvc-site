import { useMemo, useState } from "react";
import { ENV } from "@/constants/env";
import { AuthContext } from "./authContextValue";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === "admin",
      authEnabled: ENV.authEnabled,
      login: setUser,
      logout: () => setUser(null),
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
