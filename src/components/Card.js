import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} alt="" />
      <h2>{props.serviceName}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, vero
        necessitatibus? Architecto est cum corrupti dolore autem nemo doloremque
        unde, eos, sapiente et magni corporis beatae officia perspiciatis
        facilis laboriosam quasi id asperiores quibusdam a eius! Quas libero
        facilis nesciunt.
      </p>
    </div>
  );
}

export default Card;
