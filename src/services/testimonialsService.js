import { testimonials as mock } from "@/data/testimonials";
import { delay } from "@/api/helpers";

export async function getTestimonials() {
  await delay(300);
  return mock;
}
