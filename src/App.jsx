import "./App.css";
import Textfield from "./Components/TextFiled";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="text-black"></div>
      <div className="sm:mx-52">
        <Textfield />
      </div>
    </>
  );
}

export default App;
