import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function loginPage() {
  const signInButton = document.createElement("button");
  const appBody = document.getElementById("listContainer");
  signInButton.id = "signInButton";
  signInButton.textContent = "sign in with google";
  appBody.appendChild(signInButton);

  signInButton.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    function userSignIn() {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          setUser(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    userSignIn();
  });
}

function setUser(user) {
  const currentUser = user;
  return currentUser;
}

export { loginPage, setUser };
