import "./App.css";
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

function TodoList() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a Todo App" },
    { id: 3, text: "Deploy the App" },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;