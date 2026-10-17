export const ENV = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "",
  apiTimeoutMs: Number(import.meta.env.VITE_API_TIMEOUT_MS ?? 10000),
  siteUrl: import.meta.env.VITE_SITE_URL ?? "https://www.yourdomain.example",
  googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "",
  cloudinaryCloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ?? "",
  authEnabled: import.meta.env.VITE_AUTH_ENABLED === "true",
};
