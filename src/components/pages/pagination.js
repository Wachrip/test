import React from "react";

export const Pagination = ({ techsPerPage, totalTechs, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTechs / techsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((it) => (
          <li key={it}>
            <a onClick={() => paginate(it)} href="#">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
