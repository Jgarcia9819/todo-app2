import { updateView } from "../AddTodoButton";
import { displayTodos } from "../DisplayTodos/DisplayTodos";
import { fetchTodos } from "../InitializeDb";

async function inboxFilter() {
  const listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";
  const listBody = document.createElement("ul");
  listBody.id = "listBody";
  listContainer.appendChild(listBody);

  const inboxListData = await fetchTodos();
  const filteredData = inboxListData.filter(
    (todo) => todo.assigned != true && todo.checked === false
  );
  updateView("inbox");
  displayTodos(filteredData);
}

export { inboxFilter };
