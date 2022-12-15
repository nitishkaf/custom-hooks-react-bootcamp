import { useState } from "react";
import { Counter, APIFetch, Form } from "./components";
import { UserDetail } from "./components/APIFetch/userDetails";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "200px" }}
    >
      <Counter />
      <APIFetch />
      {/* <Form />  */}
      {/* <UserDetail /> */}
    </div>
  );
}

export default App;
