import "../styles.css";
import { sideBar } from "./SideBar";
import { loginPage } from "./LoginPage/LoginPage";
import { isUserLoggedIn } from "./LoginPage/AvatarLoginPopover";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { inboxPage } from "./InboxPage/InboxPage";
import { allList } from "./AllList/AllPage";
import { completedPage } from "./CompletedList/CompletedPage";
import { inboxFilter } from "./InboxPage/InboxFilter";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
//creates app body and puts things where they need to go
function appBody() {
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const signInButton = document.getElementById("signInButton");
      if (signInButton) {
        signInButton.remove();
      }
      sideBar();
      isUserLoggedIn();
      inboxFilter();
      allList();
      inboxPage();
      completedPage();
    } else {
      loginPage();
    }
  });
}
appBody();

export { appBody };
