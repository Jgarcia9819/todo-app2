import { displayTodos } from "../DisplayTodos/DisplayTodos";
import { fetchTodos, getTodosFromDb } from "../InitializeDb";
import { allFilter } from "./AllFilter";

function allList() {
  const allList = document.getElementById("allList");

  allList.addEventListener("click", () => {
    allFilter();
  });

  return;
}

export { allList };
