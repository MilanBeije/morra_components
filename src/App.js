import logo from "./logo.svg";
import "./App.css";
import { Text } from "react-native";
import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="App">
      <CustomButton
        onClickCallback={() => {
          console.log("Ciao");
        }}
      />
    </div>
  );
}

export default App;
