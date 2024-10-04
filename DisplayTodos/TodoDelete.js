import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, remove } from "firebase/database";

function deleteTodoFromDb(todo) {
  const auth = getAuth();
  const db = getDatabase();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      remove(ref(db, "todos/" + user.uid + "/" + todo.id)).then(() => {
        console.log("todo deleted", todo);
      });
    }
  });
}

export { deleteTodoFromDb };
