import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";
import Loader from "@/components/common/Loader";
import ScrollToTop from "@/routes/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
