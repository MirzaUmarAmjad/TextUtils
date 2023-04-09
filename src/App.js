import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
      <>
      <Navbar userName={"Umar"} />
          <div className="container mt-3">
              <TextForm/>
          </div>
      </>
  );
}

export default App;
