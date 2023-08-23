import { useState, useEffect, useRef } from "react";

function App() {
  //Toggle state
  const [boxColor, setBoxColor] = useState(false);
  // Mirror
  const [mirror, setMirror] = useState("");
  // Button state
  const [counter, setCounter] = useState(0);
  // Racecar state
  const [raceCar, setRaceCar] = useState(0);
  // timer
  const [time, setTime] = useState(0);
  // handle timer
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Section Component
  function GenerateSection(props) {
    return (
      <div>
        <hr />
        <h1>{props.text}</h1>
      </div>
    );
  }

  //fn for racecar position
  const moveRaceCar = (e) => {
    if (e.key === "ArrowLeft") {
      console.log("left");
      setRaceCar((raceCar) => raceCar - 10);
    } else if (e.key === "ArrowRight") {
      setRaceCar((raceCar) => raceCar + 10);
    }
  };
  // focuses on the element asap as page loads. If wala ni na code kay dili mudagan ang sakyanan dayon. Kinahanglan nako i click ang div/ section then mudagan siya
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  // timer handler

  useEffect(() => {
    let interval;
    // if time is false ( was ga run) then =>
    if (isTimerRunning) {
      // using setInterval i- increment ang state every 1 sec
      interval = setInterval(() => {
        // best practice para accurate ang state value vs
        setTime((prevTime) => prevTime + 1);
        // setTime(time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimerRunning]);

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
      <span className="margin">{counter}</span>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      {/* Race */}
      <GenerateSection text={"Race"} />
      <div
        id="race-car"
        tabIndex={0}
        // inline style
        style={{
          marginLeft: `${raceCar}px`,
        }}
        ref={ref}
        // takes e as parameter and calls it in the moveRaceCar fn
        onKeyDown={moveRaceCar}
      >
        🏎️
      </div>
      <GenerateSection text={"Stopwatch"} />
      <p className="text">{time} seconds</p>
      <button
        onClick={() => {
          setIsTimerRunning(true);
        }}
      >
        Start
      </button>
      <button
        className="margin"
        onClick={() => {
          setIsTimerRunning(false);
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          setTime(0);
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default App;
