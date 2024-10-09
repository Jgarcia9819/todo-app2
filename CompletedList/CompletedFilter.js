import { updateView } from "../AddTodoButton";
import { displayTodos } from "../DisplayTodos/DisplayTodos";
import { fetchTodos } from "../InitializeDb";

export async function completedFilter() {
  const listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";
  const listBody = document.createElement("ul");
  listBody.id = "listBody";
  listContainer.appendChild(listBody);

  const completedListData = await fetchTodos();
  const data = completedListData.filter((todo) => todo.checked === true);

  updateView("completed");
  displayTodos(data);
}
