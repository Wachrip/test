import React from "react";

export const SortBy = ({ onSortSelectHandler }) => {
  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select name="sort" onChange={(e) => onSortSelectHandler(e)}>
        <option value="">-------</option>
        <option value="Date">Date</option>
      </select>
    </div>
  );
};
