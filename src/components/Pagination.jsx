import React from "react";

const Pagination = ({
  rowsPerPage,
  totalPostLength,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPostLength / rowsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((pageNum) => {
        return (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={`pagenation_block ${
              pageNum === currentPage ? "activePagination" : ""
            }`}
          >
            page {' '}
            {pageNum}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
