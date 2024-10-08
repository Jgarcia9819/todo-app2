import inboxImage from "./images/inbox-solid.svg";
import completedImage from "./images/box-solid.svg";
import addNewTodoImage from "./images/plus-solid.svg";
import userAvatarImage from "./images/user-plus-solid.svg";
import allListImage from "./images/list-solid.svg";
import projectImage from "./images/folder-open-solid.svg";
import { addTodoForm } from "./AddTodoForm";
import { avatarLoginPopover } from "./LoginPage/AvatarLoginPopover";
import { projectsForm } from "./Projects/ProjectsForm";
import { displayProjects } from "./Projects/ProjectsDisplay";

function sideBar() {
  //sidebar nav
  const sideBar = document.createElement("div");
  sideBar.id = "sideBar";
  //user avatar
  const userAvatar = document.createElement("div");
  userAvatar.id = "userAvatar";
  const userAvatarImg = document.createElement("img");
  userAvatarImg.id = "userAvatarImg";
  userAvatarImg.src = userAvatarImage;
  userAvatar.appendChild(userAvatarImg);

  //all list view
  const allList = document.createElement("div");
  allList.id = "allList";
  const allListImg = document.createElement("img");
  allListImg.id = "allListImg";
  allListImg.src = allListImage; // Set the image source
  allList.textContent = "List View";
  allList.insertBefore(allListImg, allList.firstChild);

  //inbox button
  const inbox = document.createElement("div");
  inbox.id = "inbox";
  const inboxImg = document.createElement("img");
  inboxImg.id = "inboxImg";
  inboxImg.src = inboxImage; // Set the image source
  inbox.textContent = "Inbox";
  inbox.insertBefore(inboxImg, inbox.firstChild);

  //completed section button
  const completed = document.createElement("div");
  completed.id = "completed";
  const completedImg = document.createElement("img");
  completedImg.id = "completedImg";
  completedImg.src = completedImage; // Set the image source
  completed.textContent = "Completed";
  completed.insertBefore(completedImg, completed.firstChild);

  //add new todo button
  const addNewTodo = document.createElement("div");
  addNewTodo.id = "addNewTodo";
  const addNewTodoImg = document.createElement("img");
  addNewTodoImg.id = "addNewTodoImg";
  addNewTodoImg.src = addNewTodoImage; // Set the image source
  addNewTodo.textContent = "New Todo";
  addNewTodo.insertBefore(addNewTodoImg, addNewTodo.firstChild);

  //projects button
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "projectsContainer";
  const project = document.createElement("div");
  project.id = "project";
  const projectImg = document.createElement("img");
  projectImg.id = "projectImg";
  projectImg.src = projectImage; // Set the image source
  project.textContent = "Projects";
  project.insertBefore(projectImg, project.firstChild);

  // Append elements to the sidebar
  sideBar.appendChild(userAvatar);
  sideBar.appendChild(allList);
  sideBar.appendChild(inbox);
  sideBar.appendChild(completed);
  sideBar.appendChild(addNewTodo);
  projectsContainer.appendChild(project);
  sideBar.appendChild(projectsContainer);

  const appBody = document.getElementById("appContainer");
  appBody.insertAdjacentElement("afterbegin", sideBar);

  //append popover
  userAvatar.appendChild(avatarLoginPopover());
  addTodoForm();
  projectsForm();
  displayProjects();
  return sideBar;
}

export { sideBar };
