import React from "react";
import { useNavigate } from "react-router";

const TechType = ({ arrayToRender }) => {
  const navigate = useNavigate();

  return (
    <div className="Techs">
      {arrayToRender.map((it) => (
        <div
          key={it.id}
          className="mainForm"
          onClick={() => navigate(`/techs/${it.id}`)}
        >
          <div>{it.category}</div>
          <div>{it.company}</div>
          <div>{it.model}</div>
          <div>{it.price}$</div>
          <div>{it.date}</div>
        </div>
      ))}
    </div>
  );
};

export default TechType;
