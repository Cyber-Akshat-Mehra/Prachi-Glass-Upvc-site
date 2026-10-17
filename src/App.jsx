import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { router } from "@/routes/router";
import { AuthProvider } from "@/context/AuthContext";
import ErrorBoundary from "@/components/common/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <MotionConfig reducedMotion="user">
            <RouterProvider router={router} />
          </MotionConfig>
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
