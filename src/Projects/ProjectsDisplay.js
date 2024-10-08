import { fetchProjects } from "../InitializeDb";
import projectImage from "../images/folder-solid.svg";
import trashImage from "../images/trash-solid.svg"; // Import the trash icon

export async function displayProjects() {
  const projectsContainer = document.getElementById("projectsContainer");
  const projectListContainer = document.createElement("div");
  projectListContainer.id = "projectListContainer";
  const data = await fetchProjects();

  data.forEach((item) => {
    const newProject = document.createElement("div");
    newProject.classList.add("sidebar-item"); // Add class for cursor pointer

    const newProjectImg = document.createElement("img");
    newProjectImg.src = projectImage;
    newProject.appendChild(newProjectImg);

    const projectText = document.createElement("span");
    projectText.textContent = item.project;
    newProject.appendChild(projectText);

    const deleteButton = document.createElement("img");
    deleteButton.className = "delete-button";
    deleteButton.src = trashImage;
    newProject.appendChild(deleteButton);

    projectListContainer.appendChild(newProject);
    projectsContainer.appendChild(projectListContainer);
  });
  return data;
}
