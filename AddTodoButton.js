import { newTodo } from "./CreateToDo";
import checkMarkImage from "./images/check-solid.svg";
import tagButtonImage from "./images/tag-solid.svg";
import homeTagImage from "./images/house-solid.svg";
import workTagImage from "./images/creative-commons-nd-brands-solid.svg";
import familyTagImage from "./images/wrench-solid.svg";
import hobbyTagImage from "./images/pencil-solid.svg";
import importanceTagImage from "./images/exclamation-solid.svg";
import { allFilter } from "./AllList/AllFilter";
import { inboxFilter } from "./InboxPage/InboxFilter";
import { fetchProjects } from "./InitializeDb";
import { displayProjects } from "./Projects/ProjectsDisplay";

const icons = {
  default: tagButtonImage,
  importanceTag: importanceTagImage,
  homeTag: homeTagImage,
  workTag: workTagImage,
  familyTag: familyTagImage,
  hobbyTag: hobbyTagImage,
};

let currentView = "";
export function updateView(view) {
  currentView = view;
  console.log("current list view:", currentView);
}

const inputContainer = document.createElement("div");
const inputArea = document.createElement("input");
const submitButton = document.createElement("button");
let tagItem = "";
//creates input area for todo with input box and associated buttons
function todoInput() {
  //container that holds ALL input form buttons/items
  inputContainer.id = "inputContainer";
  //text area for input
  inputArea.id = "inputArea";
  inputArea.autocomplete = "off";
  inputArea.placeholder = "New Todo";
  //submit button img
  const checkMarkImg = document.createElement("img");
  checkMarkImg.src = checkMarkImage;
  checkMarkImg.id = "checkMarkImg";
  //submit button
  submitButton.id = "submitButton";
  submitButton.appendChild(checkMarkImg);
  //datepicker for todo
  const dateLabel = document.createElement("label");
  dateLabel.id = "dateLabel";
  dateLabel.textContent = "Due:";
  dateLabel.for = "start";
  const datePicker = document.createElement("input");
  datePicker.type = "date";
  dateLabel.appendChild(datePicker);

  //project dropdown selector for todo input/form area
  const projectSelector = document.createElement("select");
  projectSelector.id = "projectSelector";
  const projectSelectorLabel = document.createElement("label");
  projectSelectorLabel.id = "projectSelectorLabel";
  projectSelectorLabel.textContent = "Project:";

  const optionSelector = document.createElement("option");
  optionSelector.value = "Inbox";
  optionSelector.textContent = "Inbox";
  projectSelector.appendChild(optionSelector);

  async function getProjects() {
    const data = await fetchProjects();
    return data;
  }

  getProjects().then((data) => {
    console.log(data, "this is data");

    data.map((projectName) => {
      const optionSelector = document.createElement("option");
      optionSelector.value = projectName.project;
      optionSelector.textContent = projectName.project;
      projectSelector.appendChild(optionSelector);
    });
  });
  projectSelectorLabel.appendChild(projectSelector);

  //appending of each container ITEM to display
  inputContainer.appendChild(inputArea);
  inputContainer.appendChild(todoOptionsMenu());
  inputContainer.appendChild(submitButton);
  inputContainer.appendChild(dateLabel);
  inputContainer.appendChild(projectSelectorLabel);

  //pushes new todo based off input content and submit button
  function pushNewTodo() {
    submitButton.addEventListener("click", () => {
      //pushes item, importance, checked, assigned, project,date to newtodo which pushes to array
      if (inputArea.value != "" && projectSelector.value != "Inbox") {
        const pushNewTodo = newTodo(
          inputArea.value,
          tagItem,
          false,
          true,
          projectSelector.value,
          datePicker.value
        );
        switch (currentView) {
          case "all":
            allFilter();
            break;
          case "inbox":
            inboxFilter();
            break;
        }

        const addTodoForm = document.getElementById("addTodoForm");
        addTodoForm.close();
        //clear listbody which is the container
        document.getElementById("listBody").innerHTML = "";
        inputArea.value = "";
      } else if (inputArea.value != "" && projectSelector.value === "Inbox") {
        const pushNewTodo = newTodo(
          inputArea.value,
          tagItem,
          false,
          true,
          projectSelector.value,
          datePicker.value
        );
        switch (currentView) {
          case "all":
            allFilter();
            break;
          case "inbox":
            inboxFilter();
            break;
        }

        const addTodoForm = document.getElementById("addTodoForm");
        addTodoForm.close();
        //clear listbody which is the container
        document.getElementById("listBody").innerHTML = "";
        inputArea.value = "";
      }
    });
  }
  pushNewTodo();

  return inputContainer;
}

function todoOptionsMenu() {
  //button and associated label for "tag on todo input form"
  const todoOptionsButton = document.createElement("button");
  todoOptionsButton.id = "todoOptionsButton";
  const todoOptionsLabel = document.createElement("label");
  todoOptionsLabel.id = "todoOptionsLabel";
  todoOptionsLabel.textContent = "Tag:";
  const tagButtonImg = document.createElement("img");
  tagButtonImg.src = tagButtonImage;
  tagButtonImg.id = "tagButtonImg";
  todoOptionsButton.appendChild(tagButtonImg);

  //popover and associated menu for a "tag" to select
  const todoOptionsMenu = document.createElement("div");
  todoOptionsMenu.id = "todoOptionsMenu";
  //popover MENU that appears on click
  const todoOptionsPopover = document.createElement("div");
  todoOptionsPopover.id = "todoOptionsPopover";

  todoOptionsLabel.appendChild(todoOptionsButton);
  todoOptionsMenu.appendChild(todoOptionsLabel);
  todoOptionsMenu.appendChild(todoOptionsPopover);

  todoOptionsPopover.appendChild(todoPopoverMenuItems());
  //event listener for tag click to show popover
  todoOptionsMenu.addEventListener("click", () => {
    todoOptionsPopover.classList.toggle("open");
  });

  return todoOptionsMenu;
}

function todoPopoverMenuItems() {
  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.id = "menuItemsContainer";
  const importanceTag = document.createElement("div");
  importanceTag.id = "importanceTag";
  importanceTag.textContent = "Important:";
  const homeTag = document.createElement("div");
  homeTag.id = "homeTag";
  homeTag.textContent = "Home:";
  const workTag = document.createElement("div");
  workTag.id = "workTag";
  workTag.textContent = "Work:";
  const familyTag = document.createElement("div");
  familyTag.id = "familyTag";
  familyTag.textContent = "Family:";
  const hobbyTag = document.createElement("div");
  hobbyTag.id = "hobbyTag";
  hobbyTag.textContent = "Hobby:";
  const importanceImg = document.createElement("img");
  importanceImg.classList.add("tag");
  const homeTagImg = document.createElement("img");
  homeTagImg.classList.add("tag");
  const workTagImg = document.createElement("img");
  workTagImg.classList.add("tag");
  const familyTagImg = document.createElement("img");
  familyTagImg.classList.add("tag");
  const hobbyTagImg = document.createElement("img");
  hobbyTagImg.classList.add("tag");
  importanceImg.src = importanceTagImage;
  homeTagImg.src = homeTagImage;
  workTagImg.src = workTagImage;
  familyTagImg.src = familyTagImage;
  hobbyTagImg.src = hobbyTagImage;

  importanceTag.appendChild(importanceImg);
  homeTag.appendChild(homeTagImg);
  workTag.appendChild(workTagImg);
  familyTag.appendChild(familyTagImg);
  hobbyTag.appendChild(hobbyTagImg);

  menuItemsContainer.appendChild(importanceTag);
  menuItemsContainer.appendChild(homeTag);
  menuItemsContainer.appendChild(workTag);
  menuItemsContainer.appendChild(familyTag);
  menuItemsContainer.appendChild(hobbyTag);
  setTimeout(() => {
    getMenuItemClicked();
  }, 0);
  updateMenuIcon();
  return menuItemsContainer;
}

function getMenuItemClicked() {
  const menuItemsContainer = document.getElementById("menuItemsContainer");
  menuItemsContainer.addEventListener("click", (e) => {
    const checkTag = document.getElementById("checkTag");
    if (checkTag) {
      checkTag.remove();
    }
    const tagButtonIcon = document.getElementById("tagButtonImg");
    if (e.target.id === tagItem) {
      tagButtonIcon.remove();
      const tagButtonImg = document.createElement("img");
      tagButtonImg.src = tagButtonImage;
      tagButtonImg.id = "tagButtonImg";
      const todoOptionsButton = document.getElementById("todoOptionsButton");
      todoOptionsButton.appendChild(tagButtonImg);
      tagItem = "";
    } else {
      tagItem = e.target.id;
      updateMenuIcon();
    }
  });
  return;
}
function updateMenuIcon() {
  const tagButtonIcon = document.getElementById("tagButtonImg");
  Object.entries(icons).forEach(([key, value]) => {
    if (tagItem === key) {
      tagButtonIcon.remove();
      const tagButtonImg = document.createElement("img");
      tagButtonImg.src = value;
      tagButtonImg.id = "tagButtonImg";
      const todoOptionsButton = document.getElementById("todoOptionsButton");
      todoOptionsButton.appendChild(tagButtonImg);
    }
  });

  setTimeout(() => {
    checkSelectedTagItem();
  }, 0);
}

function checkSelectedTagItem() {
  const checkItem = document.getElementById(tagItem);
  const checkTag = document.createElement("input");
  checkTag.type = "checkbox";
  checkTag.id = "checkTag";
  checkTag.checked = true;

  if (checkItem) {
    checkItem.appendChild(checkTag);
  }

  return;
}
export { todoInput, icons };
