import closeButtonImage from "./images/x-solid.svg";

import { todoInput } from "./AddTodoButton";

function addTodoForm() {
  const appContainer = document.getElementById("appContainer");
  const addNewTodo = document.getElementById("addNewTodo");
  //todo form that will display on click
  const addTodoForm = document.createElement("dialog");
  addTodoForm.id = "addTodoForm";
  //container inside todo form
  const formContainer = document.createElement("div");
  formContainer.id = "todoFormInnerContainer";
  //button to close form on click
  const closeFormButton = document.createElement("button");
  closeFormButton.id = "closeFormButton";
  const closeButtonImg = document.createElement("img");
  closeButtonImg.id = "closedButtonImg";
  closeButtonImg.src = closeButtonImage;
  closeFormButton.appendChild(closeButtonImg);

  formContainer.appendChild(todoInput());
  addTodoForm.appendChild(closeFormButton);
  addTodoForm.appendChild(formContainer);

  appContainer.appendChild(addTodoForm);
  addNewTodo.addEventListener("click", () => {
    const todoInputArea = document.getElementById("inputArea");
    addTodoForm.showModal();
    todoInputArea.focus();

    closeFormButton.addEventListener("click", () => {
      setTimeout(() => {
        addTodoForm.close();
      });
    });
  });
}

export { addTodoForm };
