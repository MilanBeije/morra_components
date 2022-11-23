import "./App.css";
import CustomButton from "./fordist/components/customButton/CustomButton";
import { GameResult } from "./fordist/utils/GameResult";
import Login from "./fordist/pages/Login";

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
