import React, { useState, useEffect } from "react";

const Displaydate = (props) => {
  const [month, setMonth] = useState("");
  useEffect(() => {
  if (props.month === "1") {
    setMonth("January");
  }
  else if (props.month === "2") {
    setMonth("February");
  }
  else if (props.month === "3") {
    setMonth("March");
  }
  else if (props.month === "4") {
    setMonth("April");
  }
  else if (props.month === "5") {
    setMonth("May");
  }
  else if (props.month === "6") {
    setMonth("June");
  }
  else if (props.month === "7") {
    setMonth("July");
  }
  else if (props.month === "8") {
    setMonth("August");
  }
  else if (props.month === "9") {
    setMonth("September");
  }
  else if (props.month === "10") {
    setMonth("October");
  }
  else if (props.month === "11") {
    setMonth("November");
  }
  else {
    setMonth("December");
  }
},[props.month])
console.log("props",props.month)
console.log("haha",month)
console.log(props.day)
  return (
    <div>
      <h2>
        {props.day}
        {month}
      </h2>
    </div>
  );
};

export default Displaydate;
