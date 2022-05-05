import React from "react";

const Pagination = ({
  offset,
  setOffset,
  productPerPage,
  amountOfProducts,
}) => {
  return (
    <div>
      <button
        onClick={() => setOffset(offset - productPerPage)}
        disabled={offset === 0}
      >
        previous page
      </button>

      <button
        onClick={() => setOffset(offset + productPerPage)}
        disabled={amountOfProducts < 5}
      >
        next page
      </button>
    </div>
  );
};

export default Pagination;
