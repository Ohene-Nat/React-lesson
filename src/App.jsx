import "./App.css";

function Greeting(props) {
  return (
    <h1>Hello, I am {props.name}!</h1>
  );
}
function App() {
  const showgreeting = true;
  return (
    <div >
      {showgreeting ? <Greeting name="Alice" />: <button>CLick me</button>}
    </div>
  );
}

export default App;