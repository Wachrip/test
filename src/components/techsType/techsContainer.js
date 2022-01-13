import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import TechType from ".";
import { sortByDate } from "../../redux/reducers/technics";
import { FilterBy } from "../filterBy";
import Header from "../header";
import { SortBy } from "../sortBy";

const TechContainer = () => {
  const technics = useSelector((s) => s.technics.technics);
  const dispatch = useDispatch();
  const { category } = useParams();
  const [arrayToShow, setArrayToShow] = useState(technics);
  let arrayToRender = arrayToShow;

  const onSortSelectHandler = (e) => {
    dispatch(sortByDate(e.target.value));
  };

  const onFilterSelectHandler = (e) => {
    if (e.target.value === "none") {
      setArrayToShow(technics);
    } else {
      setArrayToShow(technics.filter((it) => it.company === e.target.value));
    }
    arrayToRender = arrayToShow.filter((it) => it.company === e.target.value);
  };

  if (category === "tvs") {
    arrayToRender = arrayToShow.filter((it) => it.category === "TV");
  }

  if (category === "refs") {
    arrayToRender = arrayToShow.filter((it) => it.category === "Refrigerator");
  }

  if (category === "cutters") {
    arrayToRender = arrayToShow.filter((it) => it.category === "Cutter");
  }

  return (
    <div className="block">
      <Header />
      <SortBy onSortSelectHandler={onSortSelectHandler} />
      <FilterBy onFilterSelectHandler={onFilterSelectHandler} />
      <TechType arrayToRender={arrayToRender} />
    </div>
  );
};

export default TechContainer;
