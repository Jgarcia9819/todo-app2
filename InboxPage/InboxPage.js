import { inboxFilter } from "./InboxFilter";

function inboxPage() {
  const inboxList = document.getElementById("inbox");

  inboxList.addEventListener("click", () => {
    inboxFilter();
  });
}

export { inboxPage };
