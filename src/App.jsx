import "./App.css";
// import SignUpForm from "./component/SignUpForm.jsx";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

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
function Navbar(){
  return(
    <header
    style={{
      padding: "1rem 1.5rem",
      marginBottom: "1rem",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      justifyContent:"space-between",
    }}
    >
     <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <Link to ="/">Home</Link>
        <Link to ="/profile">Profile</Link>
      </nav>

      <div>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}
function HomePage() {
  return (
    <div>
      <h1>Home</h1>

      <p>You are not logged in. Go to the login page to sign in</p>
    </div>
  );
}
function LoginPage(){
  const [name, setName] = useState("");
  const [user, setUser] = useState({name: "", isAuth: false})

  function handleSubmit(e){
    e.preventDefault();
    if (!name.trim()) return;
    alert("Login");
  }
  return(
    <div style={{ padding: "0 1.5rem"}}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{marginTop: "1rem"}}>
        <label htmlFor="">
          Name
          <input type="text" placeholder="Type any Name..." value ={name} onChange={(e) => setName(e.target.value)}style={{marginLeft:"0.5rem"}}
          />
        </label>
      </form>

    </div>
  )
}
function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of our React application.</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
}

export default App;