import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

function initializeTodoApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyBx9PDdCL5XXFqUkdJ2dRrSdiJ8mBRlXHI",
    authDomain: "todo-app-1a5d5.firebaseapp.com",
    databaseURL: "https://todo-app-1a5d5-default-rtdb.firebaseio.com",
    projectId: "todo-app-1a5d5",
    storageBucket: "todo-app-1a5d5.appspot.com",
    messagingSenderId: "1020656249894",
    appId: "1:1020656249894:web:bfd53047f97679e6618ae7",
  };
  const app = initializeApp(firebaseConfig);
}

export { initializeTodoApp };
