import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../header";
import AddForm from ".";
import { addTech } from "../../redux/reducers/technics";
import { useNavigate } from "react-router";

const AddFormContainer = () => {
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
      <AddForm
        onAddButtonClick={onAddButtonClick}
        onCategoryChanged={onCategoryChanged}
        onCompanyChanged={onCompanyChanged}
        onDateChanged={onDateChanged}
        onDescriptionChanged={onDescriptionChanged}
        onModelChanged={onModelChanged}
        onPriceChanged={onPriceChanged}
      />
    </div>
  );
};

export default AddFormContainer;
