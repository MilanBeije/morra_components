import "./App.css";
import CustomButton from "./fordist/components/customButton/CustomButton";
import { GameResult } from "./fordist/utils/GameResult";
import Login from "./fordist/pages/Login";
import Game from "./fordist/pages/Game";
import Ranking from "./fordist/pages/Ranking";

function App() {
  return (
    <div className="container">
      {/* <CustomButton
        onClickCallback={() => {
          const risultato = GameResult(1, 2);
          console.log(risultato);
        }}
      /> */}

      {/* <div className="login">
        <Ranking/>
      </div> */}

        {/* <Login /> */}
      <Game/>
    </div>
  );
}

export default App;
