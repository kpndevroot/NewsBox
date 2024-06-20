import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Nav, Navbar, NavbarThird } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <h1 className="text-3xl font-bold text-red-400 underline">Newsbox</h1>
    </>
  );
}

export default App;
