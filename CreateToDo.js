import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//constructor for the todo format
function CreateToDo(item, importance, checked, assigned, project, date) {
  this.item = item;
  this.importance = importance;
  this.checked = checked;
  this.assigned = assigned;
  this.project = project;
  this.date = date;
  this.id = Date.now().toString();
  this.todoDetails = () => {
    return {
      item: this.item,
      importance: this.importance,
      checked: this.checked,
      assigned: this.assigned,
      project: this.project,
      id: this.id,
      date: this.date,
    };
  };
}
//takes item,importance,checked and pushes a new object to the array to be mapped and displayed
function newTodo(item, importance, checked, assigned, project, date) {
  const todo = new CreateToDo(
    item,
    importance,
    checked,
    assigned,
    project,
    date
  );
  const todoDetails = todo.todoDetails();
  pushToDb(todoDetails);
  console.log("todo added:", todoDetails);
  return todoDetails;
}

function pushToDb(todoDetails) {
  const auth = getAuth();
  const db = getDatabase();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Use the user's UID in the database path
      set(ref(db, "todos/" + user.uid + "/" + todoDetails.id), todoDetails)
        .then(() => {
          console.log("Pushed to server", todoDetails);
        })
        .catch((error) => {
          console.error("Error pushing to server:", error);
        });
    } else {
      console.error("No user logged in");
    }
  });
}

export { CreateToDo, newTodo };
