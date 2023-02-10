import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);

  return (
    <div className="Phonetic">
      <h5>{props.phonetic.text}</h5>
      <h6>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </h6>
    </div>
  );
}
