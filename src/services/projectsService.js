import { projects as mock } from "@/data/projects";
import { delay } from "@/api/helpers";

export async function getProjects() {
  await delay(300);
  return mock;
}
