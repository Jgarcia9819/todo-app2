import { icons } from "../AddTodoButton";

function getAndSetTodoAssignedIcon(todo) {
  const todoIcon = todo.importance;
  let iconToSet;
  Object.entries(icons).forEach(([key, value]) => {
    if (todoIcon === key) {
      iconToSet = value;
    }
  });

  return iconToSet;
}

export { getAndSetTodoAssignedIcon };
