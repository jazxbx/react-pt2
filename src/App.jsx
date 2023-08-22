import { useState } from "react";

function App() {
  //Toggle state
  const [boxColor, setBoxColor] = useState(false);
  // Mirror
  const [mirror, setMirror] = useState("");
  // Button state
  const [counter, setCounter] = useState(0);
  // Racecar state
  // const [raceCar, setRaceCar] = useState("");
  //component
  function GenerateSection(props) {
    return (
      <div>
        <hr />
        <h1>{props.text}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Day 10</h1>
      {/* BOX */}
      <GenerateSection text={"Toggle the Box"} />
      <div
        id="box"
        className={boxColor ? "blue-box" : ""}
        onClick={() => {
          // setBoxColor(!boxColor);
          setBoxColor(!boxColor);
        }}
      ></div>
      {/* Mirror */}
      <GenerateSection text={"Mirror"} />
      <input
        type="text"
        // destructured mirror
        value={mirror}
        onChange={(e) => {
          // access property of onChange
          setMirror(e.target.value);
        }}
      />
      {/* input updated mirror state in p tag */}
      <p>{mirror}</p>
      {/*  */}
      <GenerateSection text={"Counter"} />
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <span>{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <GenerateSection text={"Race"} />
      <GenerateSection text={"Stopwatch"} />
    </div>
  );
}

export default App;
