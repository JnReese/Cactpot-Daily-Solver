import Board from "../src/components/Board";
import Arrows from "./components/Arrows";
import MGPinfo from "./components/MGPinfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Board></Board>
      <Arrows />
      <MGPinfo />
    </div>
  );
}

export default App;
