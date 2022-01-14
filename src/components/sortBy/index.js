import React from "react";

export const SortBy = ({ onSortSelectHandler }) => {
  return (
    // <div>
    //   <label htmlFor="sort">Sort by: </label>
    //   <select name="sort" onChange={(e) => onSortSelectHandler(e)}>
    //     <option value="">-------</option>
    //     <option value="Date">Date</option>
    //   </select>
    // </div>
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <label htmlFor="sort">Сортировать по: </label>
        <select
          name="sort"
          onChange={(e) => onSortSelectHandler(e)}
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option value="">-------</option>
          <option value="Date">Дате</option>
          <option value="highToLow">Убыванию цены</option>
          <option value="lowToHigh">Возрастанию цены</option>
        </select>
      </div>
    </div>
  );
};
