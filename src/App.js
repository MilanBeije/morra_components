import "./App.css";
import CustomButton from "./components/CustomButton";
import { GameResult } from "./components/GameResult";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <CustomButton
        onClickCallback={() => {
          const risultato = GameResult(1, 2);
          console.log(risultato);
        }}
      />
      <Login />
    </div>
  );
}

export default App;
