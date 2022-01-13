import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/tech/tvs">Телевизоры</Link>
          </li>
          <li>
            <Link to="/tech/refs">Холодильники</Link>
          </li>
          <li>
            <Link to="/tech/cutters">Мясорубки</Link>
          </li>
          <li>
            <Link to="/add">Добавить товар</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
