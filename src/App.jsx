import { useState } from "react";

function App() {
  //component
  function GenerateSection(props) {
    return (
      <div>
        <hr />
        <h1>{props.text}</h1>
      </div>
    );
  }

  const [boxColor, setBoxColor] = useState(false);

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

      <GenerateSection text={"Mirror"} />
      <GenerateSection text={"Counter"} />
      <GenerateSection text={"Race"} />
      <GenerateSection text={"Stopwatch"} />
    </div>
  );
}

export default App;
