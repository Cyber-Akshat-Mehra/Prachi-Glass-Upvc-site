import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function ProtectedRoute() {
  const { isAuthenticated, authEnabled } = useAuth();
  const location = useLocation();
  if (!authEnabled) return <Outlet />;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export function AdminRoute() {
  const { isAdmin, authEnabled } = useAuth();
  if (!authEnabled) return <Navigate to="/404" replace />;
  return isAdmin ? <Outlet /> : <Navigate to="/404" replace />;
}
