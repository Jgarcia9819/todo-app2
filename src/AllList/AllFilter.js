import { updateView } from "../AddTodoButton";
import { displayTodos } from "../DisplayTodos/DisplayTodos";
import { fetchTodos } from "../InitializeDb";

async function allFilter() {
  const listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";
  const listBody = document.createElement("ul");
  listBody.id = "listBody";
  listContainer.appendChild(listBody);
  const allListData = await fetchTodos();
  const data = allListData.filter((todo) => todo.checked === false);
  updateView("all");
  displayTodos(data);
}

export { allFilter };
