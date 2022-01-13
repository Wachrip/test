import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteTech } from "../../redux/reducers/technics";

import Header from "../header";

const ChosenTech = () => {
  const { techId } = useParams();
  const technics = useSelector((s) => s.technics.technics);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDeleteButtonClick = () => {
    dispatch(deleteTech(techId));
    navigate("/");
  };

  const currentTech = technics.find((t) => t.id === techId);

  return (
    <div>
      <Header />
      <div>{currentTech.category}</div>
      <div>{currentTech.company}</div>
      <div>{currentTech.model}</div>
      <div>{currentTech.price}</div>
      <div>{currentTech.date}</div>
      <div>{currentTech.description}</div>
      <button onClick={() => navigate(`/edit/${techId}`)}>
        Go to edit page
      </button>
      <button onClick={onDeleteButtonClick}>Delete</button>
    </div>
  );
};

export default ChosenTech;
