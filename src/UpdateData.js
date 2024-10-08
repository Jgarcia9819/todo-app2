import { getDatabase, ref, update } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function updateDataBase(todoid) {
  const auth = getAuth();
  const db = getDatabase();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      update(ref(db, "todos/" + user.uid + "/" + todoid), {
        checked: true,
      });
    } else {
      console.log("not logged in to update");
    }
  });
}
