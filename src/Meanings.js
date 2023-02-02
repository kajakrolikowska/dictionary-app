import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);

  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      <p>{props.meanings.definitions[0].definition}</p>
    </div>
  );
}
