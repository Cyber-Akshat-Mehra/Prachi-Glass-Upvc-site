import { services as mock } from "@/data/services";
import { delay } from "@/api/helpers";

export async function getServices() {
  await delay(300);
  return mock;
}
