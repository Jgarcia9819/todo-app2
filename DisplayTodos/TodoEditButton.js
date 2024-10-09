import editButtonImage from "../images/pencil-solid.svg";

function todoEditButton() {
  const todoEditButton = document.createElement("button");
  todoEditButton.id = "todoEditButton";
  const todoEditButtonImg = document.createElement("img");
  todoEditButtonImg.id = "todoEditButtonImg";
  todoEditButtonImg.src = editButtonImage;
  todoEditButton.appendChild(todoEditButtonImg);
  return todoEditButton;
}

export { todoEditButton };
