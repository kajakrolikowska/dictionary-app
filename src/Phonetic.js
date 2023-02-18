import React from "react";

import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (
    props.phonetic.audio === "" ||
    typeof props.phonetic.text === "undefined"
  ) {
    return null;
  }

  return (
    <div className="Phonetic">
      <h5>
        {" "}
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <span className="note"> 🎵</span>{" "}
        </a>
        {props.phonetic.text}
      </h5>
    </div>
  );
}
