import { getDatabase, get, ref, onValue } from "firebase/database";
import { initializeTodoApp } from "./InitializeApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";

initializeTodoApp();

let myToDos = [];
function getTodosFromDb(callback) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const db = getDatabase();
      const todosRef = ref(db, "todos/" + user.uid);
      get(todosRef).then((snapshot) => {
        const data = snapshot.val();
        if (data) {
          myToDos = Object.values(data);
          console.log(myToDos);
        } else {
          myToDos = [];
        }
        if (callback) callback();
      });

      onValue(todosRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          myToDos = Object.values(data);
        } else {
          myToDos = [];
        }
      });
    } else {
      console.log("not logged in");
    }
  });
}

export { myToDos, getTodosFromDb };
