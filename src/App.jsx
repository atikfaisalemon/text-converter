import { useState } from "react";
import "./App.css";
import Textfield from "./Components/TextFiled";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-black"></div>
      <div className="sm:mx-52">
        <Textfield />
      </div>
    </>
  );
}

export default App;
