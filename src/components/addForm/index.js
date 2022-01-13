import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../header";
import { addTech } from "../../redux/reducers/technics";
import "./addForm.scss";
import { useNavigate } from "react-router";

const AddForm = () => {
  const techs = useSelector((s) => s.technics.technics);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const onCategoryChanged = (e) => {
    setCategory(e.target.value);
  };

  const onCompanyChanged = (e) => {
    setCompany(e.target.value);
  };

  const onModelChanged = (e) => {
    setModel(e.target.value);
  };

  const onPriceChanged = (e) => {
    setPrice(e.target.value);
  };

  const onDescriptionChanged = (e) => {
    setDescription(e.target.value);
  };

  const onDateChanged = (e) => {
    setDate(e.target.value);
  };

  let onAddButtonClick = () => {
    if (!category) {
      throw Error("Вы не выбрали категорию товара.");
    }
    if (!company) {
      throw Error("Вы не выбрали компанию.");
    }

    if (!model) {
      throw Error("Введите наименование товара");
    }

    techs.map((it) => {
      if (it.model === model) {
        throw Error("Такая модель уже есть, проверьте введенные данные");
      }
      return true;
    });

    if (price < 0) {
      throw Error("Цена не может быть меньше 0.");
    }

    if (description.length > 100) {
      throw Error("Описание не должно превышать 100 символов");
    }

    let currentDate = new Date();

    var currentMonth = currentDate.getUTCMonth() + 1; //months from 1-12
    var currentDay = currentDate.getUTCDate();
    var currentYear = currentDate.getUTCFullYear();

    let year = date.split("-")[0];
    let month = date.split("-")[1];
    let day = date.split("-")[2];

    if (currentYear < year || currentMonth < month || currentDay < day) {
      throw Error("Дата добавления не может быть позже чем сегодняшнее число.");
    }

    let addingObj = {
      id: Date.now().toString(),
      category: category,
      company: company,
      model: model,
      price: price,
      date: date,
      description: description,
    };
    dispatch(addTech(addingObj));
    navigate(`/techs/${addingObj.id}`);
  };

  return (
    <div>
      <Header />
      <div className="form">
        <h2>Add technics</h2>

        <label htmlFor="category">Category</label>
        <select name="category" onChange={(e) => onCategoryChanged(e)} required>
          <option value="">------</option>
          <option value="TV">Телевизор</option>
          <option value="Refrigerator">Холодильник</option>
          <option value="Cutter">Мясорубка</option>
        </select>

        <label htmlFor="company">Company</label>
        <select name="company" onChange={(e) => onCompanyChanged(e)} required>
          <option value="">------</option>
          <option value="Samsung">Samsung</option>
          <option value="LG">LG</option>
          <option value="Indesit">Indesit</option>
        </select>

        <label htmlFor="model">Model</label>
        <input type="text" name="model" onChange={(e) => onModelChanged(e)} />

        <label htmlFor="price">Price</label>
        <input type="number" name="price" onChange={(e) => onPriceChanged(e)} />

        <label htmlFor="date">Date</label>
        <input type="date" name="date" onChange={(e) => onDateChanged(e)} />

        <label htmlFor="">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          onChange={(e) => onDescriptionChanged(e)}
        ></textarea>

        <button onClick={onAddButtonClick}>Add</button>
      </div>
    </div>
  );
};

export default AddForm;
