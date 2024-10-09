import closeImage from "../images/x-solid.svg";
import formSubmitImage from "../images/check-solid.svg";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBx9PDdCL5XXFqUkdJ2dRrSdiJ8mBRlXHI",
  authDomain: "todo-app-1a5d5.firebaseapp.com",
  databaseURL: "https://todo-app-1a5d5-default-rtdb.firebaseio.com",
  projectId: "todo-app-1a5d5",
  storageBucket: "todo-app-1a5d5.appspot.com",
  messagingSenderId: "1020656249894",
  appId: "1:1020656249894:web:bfd53047f97679e6618ae7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
    const formInput = document.getElementById("projectsFormInput");
    formInput.focus();
  });
  projectsFormCloseButton();
  projectFormContents();
  addProject();
}

function projectsFormCloseButton() {
  const projectsCloseButton = document.createElement("button");
  projectsCloseButton.id = "projectsCloseButton";
  const projectsCloseButtonImg = document.createElement("img");
  projectsCloseButtonImg.id = "projectsCloseButtonImg";
  projectsCloseButtonImg.src = closeImage;
  projectsCloseButton.appendChild(projectsCloseButtonImg);

  const projectsForm = document.getElementById("projectForm");
  projectsForm.appendChild(projectsCloseButton);

  projectsCloseButton.addEventListener("click", () => {
    projectsForm.close();
  });
}

function projectFormContents() {
  const projectsForm = document.getElementById("projectForm");
  const formContents = document.createElement("div");
  formContents.id = "formContents";
  const formLabel = document.createElement("label");
  formLabel.id = "projectsFormLabel";
  formLabel.textContent = "Create New Project";
  const formInput = document.createElement("input");
  formInput.id = "projectsFormInput";
  const formSubmit = document.createElement("button");
  formSubmit.id = "projectsFormSubmit";
  const formSubmitImg = document.createElement("img");
  formSubmitImg.id = "formSubmitImg";
  formSubmitImg.src = formSubmitImage;
  formSubmit.appendChild(formSubmitImg);

  formContents.appendChild(formLabel);
  formContents.appendChild(formInput);
  formContents.appendChild(formSubmit);
  projectsForm.appendChild(formContents);
}

function addProject() {
  const formSubmit = document.getElementById("projectsFormSubmit");
  const formInput = document.getElementById("projectsFormInput");
  const projectForm = document.getElementById("projectForm");

  const formID = Date.now().toString();
  const auth = getAuth();
  const db = getDatabase();

  formSubmit.addEventListener("click", () => {
    const data = {
      project: formInput.value,
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        set(ref(db, "projects/" + user.uid + "/" + formID), data).then(() => {
          console.log("project added", data);
        });
      } else {
        console.log("not logged in to update");
      }
    });
    projectForm.close();
    displayProjects();
  });
}
