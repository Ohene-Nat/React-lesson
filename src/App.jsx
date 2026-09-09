import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  
  function handleChange(event) {
    const value = event.target.value;
    setName(value);
  }
  return (
  <div>
    <input type= "text" placeholder="Name..." onChange={handleChange}/>
    {name}
  </div>
  )
}

export default App;