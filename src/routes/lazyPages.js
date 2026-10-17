import { lazy } from "react";

export const Home = lazy(() => import("@/pages/Home"));
export const About = lazy(() => import("@/pages/About"));
export const Products = lazy(() => import("@/pages/Products"));
export const ProductDetails = lazy(() => import("@/pages/ProductDetails"));
export const Gallery = lazy(() => import("@/pages/Gallery"));
export const Projects = lazy(() => import("@/pages/Projects"));
export const Contact = lazy(() => import("@/pages/Contact"));
export const NotFound = lazy(() => import("@/pages/NotFound"));
