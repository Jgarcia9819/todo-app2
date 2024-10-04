import { myToDos } from "../DisplayTodos/DisplayTodos";
import { projects } from "./Projects";
function updateProjectsArray() {
  myToDos.forEach((projectItem) => {
    if (projectItem.project != false) {
      projects.push(projectItem.project);
    }
  });
  return;
}

export { updateProjectsArray };
