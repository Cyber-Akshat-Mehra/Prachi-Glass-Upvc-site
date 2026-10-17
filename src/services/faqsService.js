import { faqs as mock } from "@/data/faqs";
import { delay } from "@/api/helpers";

export async function getFaqs() {
  await delay(300);
  return mock;
}
