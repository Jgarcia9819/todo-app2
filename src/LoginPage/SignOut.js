import { getAuth, signOut } from "firebase/auth";

function signOutOfApp() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("sign out successful");
      location.reload();
    })
    .catch((error) => {
      console.log("error occured");
    });
}

export { signOutOfApp };
