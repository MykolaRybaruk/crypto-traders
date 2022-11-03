import "./App.css";
import Continue from "./components/Continue/Continue";
import Header from "./components/Header/Header";
import Trading from "./components/Trading/Trading";

function App() {
  return (
    <div className="App">
      <Header />
      <Trading />
      <Continue />
    </div>
  );
}

export default App;
