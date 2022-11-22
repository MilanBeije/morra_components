import logo from "./logo.svg";
import "./App.css";
import { Text } from "react-native";
import CustomButton from "./components/CustomButton";
import { GameResult } from "./components/GameResult";

function App() {

  return (
    <div className="App">
      <CustomButton
        onClickCallback={() => {
          const risultato = GameResult(1,2)
          console.log(risultato[0]);
        }}
      />
    </div>
  );
}

export default App;
