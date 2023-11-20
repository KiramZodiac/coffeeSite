import React from "react";
import "./App.css";

export default function Coffee(props: any) {
  return (
    <div className="coffee">
      <h1>Coffee type: {props.type}</h1>
      <h2>price: {props.price}</h2>
      <img src={props.image} alt="my coffee" />
      <h3>
        Description:
        {props.descripton}
      </h3>
      <button>order now</button>
    </div>
  );
}
