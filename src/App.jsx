import "./App.css";
import { useState } from "react";

function Greeting(props) {
  return (
    <h1>Hello, I am {props.name}!</h1>
  );
}
function App() {
  const [showgreeting, setShowGreeting] = useState(false);
  function toggleGreeting() {
    if (showgreeting) {
      setShowGreeting(false);
    } else {
      setShowGreeting(true);
    }
    console.log(showgreeting);
  }
  return (
    <div >
      <button onClick={toggleGreeting}>Toggle greeting</button>
      {showgreeting && <Greeting name="Alice" />}
    </div>
  );
}

export default App;