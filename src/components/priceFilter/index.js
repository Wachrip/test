import React from "react";

export const FilterPrice = ({
  onFromValueChanged,
  onToValueChanged,
  onSearchButtonClick,
}) => {
  return (
    <div>
      <label htmlFor="from">Цена от:</label>
      <input
        type="number"
        name="price"
        onChange={(e) => onFromValueChanged(e)}
        className="
        form-control
        block
        w-96
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        placeholder="От"
      />

      <label htmlFor="from">Цена до:</label>
      <input
        type="number"
        name="price"
        onChange={(e) => onToValueChanged(e)}
        className="
        form-control
        block
        w-96
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
        placeholder="До"
      />

      <button
        onClick={onSearchButtonClick}
        className="
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};
