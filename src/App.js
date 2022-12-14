import { Counter, APIFetch, Form } from "./components";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "200px" }}
    >
      <Counter />
      <APIFetch />
      <Form />
    </div>
  );
}

export default App;
