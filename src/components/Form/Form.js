import { useState } from "react";

export const Form = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="fullname"
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
  );
};
