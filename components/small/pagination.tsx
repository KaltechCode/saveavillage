import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }: { currentItems: number[] }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item: number) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <Items currentItems={currentItems} /> */}
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination-container"
      /> */}

      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <FaAnglesRight
            //   style={{ color: primary ? "text-primary" : "text-white" }}
            size={16}
            className={`${""}`}
          />
        }
        previousLabel={<FaAnglesLeft size={16} className={`${""}`} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination-container"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item prev-btn"
        previousLinkClassName="page-link"
        nextClassName="page-item next-btn"
        nextLinkClassName="page-link"
        breakClassName="page-item break-item"
        breakLinkClassName="page-link"
        activeClassName="active"
        disabledClassName="disabled"
      />
    </>
  );
}

export default PaginatedItems;
