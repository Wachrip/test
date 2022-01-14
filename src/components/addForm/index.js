import React from "react";
import "./addForm.scss";

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
      <div className="form">
        <h2>Add technics</h2>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <select
              name="category"
              onChange={(e) => onCategoryChanged(e)}
              required
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
              <option value="">Выберите категорию</option>
              <option value="TV">Телевизор</option>
              <option value="Refrigerator">Холодильник</option>
              <option value="Cutter">Мясорубка</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <select
              name="company"
              onChange={(e) => onCompanyChanged(e)}
              required
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
              <option value="">Выберите компанию</option>
              <option value="Samsung">Samsung</option>
              <option value="LG">LG</option>
              <option value="Indesit">Indesit</option>
            </select>
          </div>
        </div>

        {/* <label htmlFor="category">Category</label>
        <select name="category" onChange={(e) => onCategoryChanged(e)} required>
          <option value="">Выберите категорию</option>
          <option value="TV">Телевизор</option>
          <option value="Refrigerator">Холодильник</option>
          <option value="Cutter">Мясорубка</option>
        </select> */}

        {/* <label htmlFor="company">Company</label>
        <select name="company" onChange={(e) => onCompanyChanged(e)} required>
          <option value="">Выберите компанию</option>
          <option value="Samsung">Samsung</option>
          <option value="LG">LG</option>
          <option value="Indesit">Indesit</option>
        </select> */}

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleText0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Введите название модели
            </label>
            <input
              type="text"
              name="model"
              onChange={(e) => onModelChanged(e)}
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
              placeholder="Модель"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleText0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Введите цену
            </label>
            <input
              type="number"
              name="price"
              onChange={(e) => onPriceChanged(e)}
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
              placeholder="Цена"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleText0"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Выберите дату
            </label>
            <input
              type="date"
              name="date"
              onChange={(e) => onDateChanged(e)}
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
              placeholder="mm/dd/yyyy"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Введите описание
            </label>
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
              name="description"
              cols="30"
              rows="10"
              onChange={(e) => onDescriptionChanged(e)}
              placeholder="Описание"
            ></textarea>
          </div>
        </div>

        {/* <label htmlFor="model">Model</label>
        <input type="text" name="model" onChange={(e) => onModelChanged(e)} /> */}

        {/* <label htmlFor="price">Price</label>
        <input type="number" name="price" onChange={(e) => onPriceChanged(e)} /> */}
        {/* 
        <label htmlFor="date">Date</label>
        <input type="date" name="date" onChange={(e) => onDateChanged(e)} /> */}

        {/* <label htmlFor="">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          onChange={(e) => onDescriptionChanged(e)}
        ></textarea> */}

        <button
          onClick={onAddButtonClick}
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
          Add
        </button>
      </div>
    </div>
  );
};

export default AddForm;
