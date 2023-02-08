import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <strong>Example: {props.example}</strong>
      </div>
    );
  } else {
    return null;
  }
}
