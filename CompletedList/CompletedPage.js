import { completedFilter } from "./CompletedFilter";

export function completedPage() {
  const completed = document.getElementById("completed");

  completed.addEventListener("click", () => {
    completedFilter();
  });
}
