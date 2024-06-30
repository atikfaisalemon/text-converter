import "./App.css";
import Textfield from "./Components/TextFiled";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <div className="text-black"></div>
      <div className="sm:px-52">
        <Textfield />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
