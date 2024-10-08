import { initializeTodoApp } from "./InitializeApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

initializeTodoApp();

export function getTodosFromDb() {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getDatabase();
        const todosRef = ref(db, "todos/" + user.uid);
        onValue(
          todosRef,
          (snapshot) => {
            const data = snapshot.val();
            if (data) {
              resolve(Object.values(data));
            } else {
              resolve([]);
            }
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        console.log("not logged in");
        resolve([]);
      }
    });
  });
}

export function getProjectsFromDb() {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const db = getDatabase();
        const todosRef = ref(db, "projects/" + user.uid);
        onValue(
          todosRef,
          (snapshot) => {
            const data = snapshot.val();
            if (data) {
              resolve(Object.values(data));
            } else {
              resolve([]);
            }
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        console.log("not logged in");
        resolve([]);
      }
    });
  });
}

// Using async/await
export async function fetchTodos() {
  try {
    const todos = await getTodosFromDb();
    console.log("Todos:", todos);
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

export async function fetchProjects() {
  try {
    const projects = await getProjectsFromDb();
    console.log("projects:", projects);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}
