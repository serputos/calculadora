import "./App.css";
import Button from "./button";
import ClearButton from "./ClearButton";
import Input from "./input";
import { useState } from "react";
let operacio = null;
let firstNum = null;
let secondNum = null;

let bool = false;
let seguir = true;

export default function App() {
  const [nums, setNums] = useState(0);
  /* const [nextNum, setNextNum] = useState(0);*/

  const handleClick = (input) => {
    console.log(seguir);
    if (!bool && seguir === true) {
      firstNum = 0;
      sigueNum(input);
    } else if (!seguir) {
      setNums(input);
    } else {
      calculOperacio(input);
    }

    seguir = true;
    console.log(firstNum);
  };
  const sigueNum = (input) => {
    seguir = true;
    firstNum = nums;
    setNums(firstNum * 10 + input);
    console.log(input);
  };

  const calculOperacio = (input) => {
    bool = false;

    if (operacio === "+") {
      secondNum = nums;
      handleClick(firstNum + secondNum + input);
    } else {
      handleClick(firstNum + secondNum - input);
    }
    seguir = false;
  };

  const Suma = () => {
    seguir = false;
    operacio = "+";
    bool = true;
  };

  const Resta = () => {
    seguir = false;
    operacio = "-";
    bool = true;
  };

  const Clear = () => {
    bool = false;
    seguir = false;

    setNums(0);
  };

  return (
    <div className="App">
      <div className="numeros">
        <div id="pantalla">
          <div id="numPantalla">
            <Input display={nums} />
          </div>
        </div>
        <div>
          <Button value={1} handle={handleClick} />
          <Button value={2} handle={handleClick} />
          <Button value={3} handle={handleClick} />
        </div>
        <div>
          <Button value={4} handle={handleClick} />
          <Button value={5} handle={handleClick} />
          <Button value={6} handle={handleClick} />
        </div>
        <div>
          <Button value={7} handle={handleClick} />
          <Button value={8} handle={handleClick} />
          <Button value={9} handle={handleClick} />
        </div>
        <div id="zero">
          <Button value={0} handle={handleClick} />
        </div>

        <div id="sumaResta">
          <Button value={"+"} handle={Suma} />
          <Button value={"-"} handle={Resta} />
        </div>
        <div id="clearButton">
          <ClearButton handle={Clear} />
        </div>
      </div>
    </div>
  );
}
