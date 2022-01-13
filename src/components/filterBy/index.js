import React from "react";

export const FilterBy = ({ onFilterSelectHandler }) => {
  return (
    <div>
      <label htmlFor="filter">Filter by: </label>
      <select name="filter" onChange={(e) => onFilterSelectHandler(e)}>
        <option value="none">-------</option>
        <option value="Samsung">Samsung</option>
        <option value="LG">LG</option>
        <option value="Indesit">Indesit</option>
      </select>
    </div>
  );
};
