import deleteTodoImage from "../images/trash-solid.svg";
import { getAndSetTodoAssignedIcon } from "./DisplayTodoIcon";
import { todoEditButton } from "./TodoEditButton";
import { deleteTodoFromDb } from "./TodoDelete";
import { updateDataBase } from "../UpdateData";

//appends list
const listContainer = document.getElementById("listContainer");
const listBody = document.createElement("ul");
listBody.id = "listBody";
listContainer.appendChild(listBody);

//maps through and displays the todo array objects
function displayTodos(displayType) {
  const listBody = document.getElementById("listBody");
  const todosListToMap = displayType;
  todosListToMap.map((todo, index) => {
    //todo object pieces
    const todoItem = todo.item;
    const todoTagImage = getAndSetTodoAssignedIcon(todo);
    const isChecked = todo.checked;
    const todoId = todo.id;

    const displayItem = document.createElement("li");
    displayItem.id = "displayItem";
    const displayItemText = document.createElement("div");
    displayItemText.id = "displayItemText";
    displayItemText.textContent = todoItem;

    const displayChecked = document.createElement("input");
    displayChecked.type = "checkbox";
    if (isChecked === false) {
      displayChecked.checked = false;
    } else if (isChecked === true) {
      displayChecked.checked = true;
    }
    displayChecked.addEventListener("change", () => {
      if (displayChecked.checked === true) {
        setTimeout(() => {
          displayItem.remove();
        }, 200);

        updateDataBase(todo.id);
      }
    });

    const todoTag = document.createElement("div");
    todoTag.id = "todoTag";
    const todoTagImg = document.createElement("img");
    todoTagImg.id = "todoTagImg";
    if (todoTagImage && todoTagImage != "undefined") {
      todoTagImg.src = todoTagImage;
      todoTag.appendChild(todoTagImg);
    }

    const deleteTodo = document.createElement("button");
    deleteTodo.id = "deleteTodo";
    const deleteTodoImg = document.createElement("img");
    deleteTodoImg.id = "deleteTodoImg";
    deleteTodoImg.src = deleteTodoImage;
    deleteTodo.appendChild(deleteTodoImg);
    deleteTodo.addEventListener("click", () => {
      console.log("clicked delete");
      displayItem.remove();
      deleteTodoFromDb(todo);
    });
    displayItem.appendChild(todoEditButton());
    displayItem.appendChild(displayChecked);
    displayItem.appendChild(displayItemText);
    displayItem.appendChild(todoTag);
    displayItem.appendChild(deleteTodo);
    listBody.appendChild(displayItem);

    return;
  });
  return;
}

export { displayTodos };
