import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import TechType from ".";
import {
  sortByDate,
  sortByPriceHighToLow,
  sortByPriceLowToHigh,
} from "../../redux/reducers/technics";
import { FilterBy } from "../filterBy";
import Header from "../header";
import { Pagination } from "../pages/pagination";
import { FilterPrice } from "../priceFilter";
import { SortBy } from "../sortBy";

const TechContainer = () => {
  const technics = useSelector((s) => s.technics.technics);

  const dispatch = useDispatch();
  const { category } = useParams();
  const [arrayToShow, setArrayToShow] = useState(technics);

  let arrayToRender = arrayToShow;
  const [currentPage, setCurrentPage] = useState(1);
  const [techPerPage] = useState(2);

  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const indexOfLastTech = currentPage * techPerPage;
  const indexOfFirstTech = indexOfLastTech - techPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(arrayToRender);
  if (technics !== arrayToShow && technics.length === arrayToShow.length) {
    setArrayToShow(technics);
  }

  const onSortSelectHandler = (e) => {
    if (e.target.value === "Date") {
      dispatch(sortByDate(e.target.value));
    }
    if (e.target.value === "highToLow")
      dispatch(sortByPriceHighToLow(e.target.value));
    if (e.target.value === "lowToHigh")
      dispatch(sortByPriceLowToHigh(e.target.value));
  };

  const onFilterSelectHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "none") {
      setArrayToShow(technics);
    } else {
      arrayToRender = technics.filter((it) => it.company === e.target.value);
      setArrayToShow(arrayToRender);
    }
  };

  const onFromValueChange = (e) => {
    setFromPrice(e.target.value);
  };

  const onToValueChange = (e) => {
    setToPrice(e.target.value);
  };

  const onSearchButtonClick = () => {
    if (+toPrice >= +fromPrice) {
      arrayToRender = technics.filter(
        (it) => +it.price >= fromPrice && +it.price <= toPrice
      );
      setArrayToShow(arrayToRender);
    }
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

  const currentTechs = arrayToRender.slice(indexOfFirstTech, indexOfLastTech);

  return (
    <div className="block">
      <Header />
      <SortBy onSortSelectHandler={onSortSelectHandler} />
      <FilterBy onFilterSelectHandler={onFilterSelectHandler} />
      <FilterPrice
        onSearchButtonClick={onSearchButtonClick}
        onFromValueChanged={onFromValueChange}
        onToValueChanged={onToValueChange}
      />
      <TechType arrayToRender={currentTechs} />
      <Pagination
        techsPerPage={techPerPage}
        paginate={paginate}
        totalTechs={arrayToRender.length}
      />
    </div>
  );
};

export default TechContainer;
