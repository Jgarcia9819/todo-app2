export function projectsForm() {
  const appContainer = document.getElementById("appContainer");
  const project = document.getElementById("project");
  const projectForm = document.createElement("dialog");
  projectForm.id = "projectForm";
  const projectFormContainer = document.createElement("div");
  projectFormContainer.id = "projectFormContainer";
  projectForm.appendChild(projectFormContainer);
  appContainer.appendChild(projectForm);
  project.addEventListener("click", () => {
    projectForm.showModal();
  });
}
