import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section className="partOfSpeech">
        <h5>{props.meaning.partOfSpeech}</h5>
        {props.meaning.definitions.map(function (definition, index) {
          if (index > 2) return null;
          return (
            <p key={index}>
              {definition.definition}
              <br />
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          );
        })}{" "}
      </section>
    </div>
  );
}
