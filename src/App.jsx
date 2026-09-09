import "./App.css";

function Greeting(props) {
  return (
    <h1>Hello, I am {props.name}!</h1>
  );
}
function App() {
  return (
    <div >
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;