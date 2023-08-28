import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Apply(props) {
  return (
    <div className="card-container">
      <h1 className="card-title">{props.title}</h1>
      <h1 className="card-name">{props.name}</h1>
      <img className="card-image" src={props.img} alt="Nithin" />
      <h1 className="card-info">{props.phn}</h1>
      <h1 className="card-info">{props.gmail}</h1>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Apply
      title=" New Looks"
      name="Nithin"
      img="https://content.jdmagicbox.com/comp/hyderabad/y9/040pxx40.xx40.121126172458.y9y9/catalogue/new-looks-hair-and-care-gandhi-nagar-hyderabad-beauty-parlours-vqvydycyng.jpg"
      phn="8790562356"
      gmail="newlokks@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
