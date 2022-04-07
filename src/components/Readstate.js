import { useState } from "react";
import ReactDOM from "react-dom";

const Readstate=()=> {
  const [color, setColor] = useState("red");

  return (
  <>
  <h1>My favorite color is {color}!</h1>
  <button type="button" onClick={()=> setColor("Blue")}>Blue</button>
  </>
  );
}

export default Readstate;

