import React from "react";

const AddForm = ({
  onCategoryChanged,
  onCompanyChanged,
  onModelChanged,
  onPriceChanged,
  onDateChanged,
  onDescriptionChanged,
  onAddButtonClick,
}) => {
  return (
    <div>
      <div>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <div>
            <div className="inline-block relative w-96 mb-5">
              <label htmlFor="category">Выберите категорию: </label>
              <select
                name="category"
                onChange={(e) => onCategoryChanged(e)}
                required
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Выберите категорию</option>
                <option value="TV">Телевизор</option>
                <option value="Refrigerator">Холодильник</option>
                <option value="Cutter">Мясорубка</option>
              </select>
            </div>

            <div className="inline-block relative w-96 mb-5">
              <label htmlFor="company">Выберите компанию: </label>
              <select
                name="company"
                onChange={(e) => onCompanyChanged(e)}
                required
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Выберите компанию:</option>
                <option value="Samsung">Samsung</option>
                <option value="LG">LG</option>
                <option value="Indesit">Indesit</option>
              </select>
            </div>
            <div className="form-group mb-6 w-96">
              <label htmlFor="model">Введите модель: </label>
              <input
                type="text"
                name="model"
                onChange={(e) => onModelChanged(e)}
                className="form-control block
        w-full
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="form-group mb-6 w-96">
              <label htmlFor="price">Введите цену: </label>
              <input
                type="number"
                name="price"
                onChange={(e) => onPriceChanged(e)}
                className="form-control block
        w-full
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="form-group mb-6 w-96">
              <label htmlFor="date">Выберите дату: </label>
              <input
                type="date"
                name="date"
                onChange={(e) => onDateChanged(e)}
                className="form-control block
        w-full
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="form-group mb-6">
              <textarea
                className="
        form-control
        block
        w-full
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
                rows="3"
                placeholder="Описание"
                type="text"
                name="description"
                onChange={(e) => onDescriptionChanged(e)}
              ></textarea>
            </div>
            <button
              onClick={onAddButtonClick}
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
