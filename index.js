import "./styles.css";
import { sideBar } from "./SideBar";
import { displayTodos } from "./DisplayTodos/DisplayTodos";
import { loginPage } from "./LoginPage/LoginPage";
import { isUserLoggedIn } from "./LoginPage/AvatarLoginPopover";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getTodosFromDb } from "./InitializeDb";

//creates app body and puts things where they need to go
function appBody() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const signInButton = document.getElementById("signInButton");
      if (signInButton) {
        signInButton.remove();
      }
      getTodosFromDb(displayTodos);
      sideBar();
      isUserLoggedIn();
    } else {
      loginPage();
    }
  });
}
appBody();

export { appBody };
