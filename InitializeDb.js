import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

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
