import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { ProtectedRoute, AdminRoute } from "./ProtectedRoute";
import { Home, About, Products, ProductDetails, Gallery, Projects, Contact, NotFound } from "./lazyPages";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <AdminRoute />,
            children: [],
          },
        ],
      },
      { path: "/404", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
