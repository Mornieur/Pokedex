import React from "react";
import "./index.css";
const PokemonThumnail = ({ id, name, image, type }) => {
  const style = `thumb-container ${type}`;
  return (
    <div className="OnePokemon">
      <div className="number">
        <small
          style={{
            fontSize: 15,
          }}
        >
          #0{id}
        </small>
      </div>
      <img src={image} alt={name} />

      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
        <div className="fundo"></div>
      </div>
    </div>
  );
};

export default PokemonThumnail;
