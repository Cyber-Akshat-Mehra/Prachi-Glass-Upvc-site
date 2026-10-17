import { products as mock } from "@/data/products";
import { delay, httpError } from "@/api/helpers";

export async function getProducts() {
  await delay(300);
  return mock;
}

export async function getProductById(id) {
  await delay(300);
  const found = mock.find((p) => p.id === id);
  if (!found) throw httpError(404, "Product not found");
  return found;
}

export async function getRelatedProducts(product, limit = 3) {
  await delay(150);
  return mock.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit);
}
