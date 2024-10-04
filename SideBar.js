import inboxImage from "./images/inbox-solid.svg";
import completedImage from "./images/box-solid.svg";
import addNewTodoImage from "./images/plus-solid.svg";
import userAvatarImage from "./images/user-plus-solid.svg";
import { addTodoForm } from "./AddTodoForm";
import { avatarLoginPopover } from "./LoginPage/AvatarLoginPopover";

function sideBar() {
  //sidebar nav
  const sideBar = document.createElement("div");
  sideBar.id = "sideBar";
  //user avatar
  const userAvatar = document.createElement("div");
  userAvatar.id = "userAvatar";
  const userAvatarImg = document.createElement("img");
  userAvatarImg.id = "userAvatarImg";
  //inbox button
  const inbox = document.createElement("div");
  inbox.id = "inbox";
  const inboxImg = document.createElement("img");
  inboxImg.id = "inboxImg";
  //completed section button
  const completed = document.createElement("div");
  completed.id = "completed";
  const completedImg = document.createElement("img");
  completedImg.id = "completedImg";
  //add new todo button
  const addNewTodo = document.createElement("div");
  addNewTodo.id = "addNewTodo";
  const addNewTodoImg = document.createElement("img");
  addNewTodoImg.id = "addNewTodoImg";

  userAvatarImg.src = userAvatarImage;
  inboxImg.src = inboxImage;
  completedImg.src = completedImage;
  addNewTodoImg.src = addNewTodoImage;

  userAvatar.appendChild(userAvatarImg);

  inbox.appendChild(inboxImg);
  completed.appendChild(completedImg);
  addNewTodo.appendChild(addNewTodoImg);
  sideBar.appendChild(userAvatar);
  sideBar.appendChild(inbox);
  sideBar.appendChild(completed);
  sideBar.appendChild(addNewTodo);
  const appBody = document.getElementById("appContainer");
  appBody.insertAdjacentElement("afterbegin", sideBar);
  //append popover
  userAvatar.appendChild(avatarLoginPopover());
  addTodoForm();

  return sideBar;
}

export { sideBar };
