import "./styles.css";
import { sideBar } from "./SideBar";
import { loginPage } from "./LoginPage/LoginPage";
import { isUserLoggedIn } from "./LoginPage/AvatarLoginPopover";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { inboxPage } from "./InboxPage/InboxPage";
import { allList } from "./AllList/AllPage";
import { completedPage } from "./CompletedList/CompletedPage";
import { inboxFilter } from "./InboxPage/InboxFilter";
import { initializeTodoApp } from "@/InitializeApp.js";

initializeTodoApp();

//creates app body and puts things where they need to go
function appBody() {
  const auth = getAuth();
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
