import "./App.css";
import SignUpForm from "./component/SignUpForm.jsx";
import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
  
//   function handleChange(event) {
//     const value = event.target.value;
//     setName(value);
//   }
//   return (
//   <div>
//     <input type= "text" placeholder="Name..." onChange={handleChange}/>
//     {name}
//   </div>
//   )
// }

// function TodoList() {
//   const todos = [
//     { id: 1, text: "Learn React" },
//     { id: 2, text: "Build a Todo App" },
//     { id: 3, text: "Deploy the App" },
//   ];

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }
function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our React application.</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;