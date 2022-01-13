import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteTech, editTech } from "../../redux/reducers/technics";
import Header from "../header";

const ChosenTechEditing = () => {
  const dispatch = useDispatch();
  const { techId } = useParams();
  const technics = useSelector((s) => s.technics.technics);
  const navigate = useNavigate();

  const currentTech = technics.find((t) => t.id === techId);

  const [category, setCategory] = useState(currentTech.category);
  const [company, setCompany] = useState(currentTech.company);
  const [model, setModel] = useState(currentTech.model);
  const [price, setPrice] = useState(currentTech.price);
  const [description, setDescription] = useState(currentTech.description);
  const [date, setDate] = useState(currentTech.date);

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

  let onEditButtonClick = () => {
    if (!category) {
      throw Error("Вы не выбрали категорию товара.");
    }
    if (!company) {
      throw Error("Вы не выбрали компанию.");
    }

    if (!model) {
      throw Error("Введите наименование товара");
    }

    if (price < 0) {
      throw Error("Цена не может быть меньше 0.");
    }

    if (description.length > 100) {
      throw Error("Описание не должно превышать 100 символов");
    }

    let currentDate = new Date();

    var currentMonth = currentDate.getUTCMonth() + 1;
    var currentDay = currentDate.getUTCDate();
    var currentYear = currentDate.getUTCFullYear();

    let year = date.split("-")[0];
    let month = date.split("-")[1];
    let day = date.split("-")[2];

    if (currentYear < year || currentMonth < month || currentDay < day) {
      throw Error("Дата добавления не может быть позже чем сегодняшнее число.");
    }

    let editingData = {
      id: techId,
      category: category,
      company: company,
      model: model,
      price: price,
      date: date,
      description: description,
    };

    dispatch(editTech(editingData));
    navigate(`/techs/${techId}`);
  };

  const onDeleteButtonClick = () => {
    dispatch(deleteTech(techId));
  };

  return (
    <div>
      <Header />
      <div className="form">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={onCategoryChanged}
        />

        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={onCompanyChanged}
        />

        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          value={model}
          onChange={onModelChanged}
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={onPriceChanged}
        />

        <label htmlFor="date">Date</label>
        <input type="date" name="date" value={date} onChange={onDateChanged} />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={onDescriptionChanged}
        />

        <button onClick={onEditButtonClick}>Edit</button>
        <button onClick={onDeleteButtonClick}>Delete</button>
      </div>
    </div>
  );
};

export default ChosenTechEditing;
