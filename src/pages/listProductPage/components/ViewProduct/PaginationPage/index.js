import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useParams } from "react-router-dom";

const PaginationPage = ({
  queryFilter,
  setQueryFilter,
  setDataFilterWatch,
  dataFilterWatch,
  totalPage,
}) => {
  let { brandId } = useParams();
  const numberPage = [];
  const totalPages = Math.ceil(
    dataFilterWatch && totalPage / queryFilter.limit - 1
  );

  const handlePageNext = () => {
    setQueryFilter({ ...queryFilter, page: queryFilter.page + 1 });
  };
  const handlePagePrev = () => {
    setQueryFilter({ ...queryFilter, page: queryFilter.page - 1 });
  };

  const handlePage = (page) => {
    setQueryFilter({
      ...queryFilter,
      page: page,
    });
  };
  if (totalPages && dataFilterWatch && queryFilter) {
    for (let i = 0; i <= totalPages; i++) {
      numberPage.push(i);
    }
  }

  return (
    <div className="d-flex justify-content-center pagination-product">
      <Pagination>
        {/* <Pagination.First /> */}
        <Pagination.Prev
          onClick={handlePagePrev}
          disabled={queryFilter.page === 0}
        />
        {numberPage.map((item, index) => (
          <Pagination.Item
            key={index}
            active={item === queryFilter.page}
            onClick={() => handlePage(item)}
          >
            {item}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={handlePageNext}
          disabled={queryFilter.page === totalPages}
        >
          next
        </Pagination.Next>
        {/* <Pagination.Last /> */}
      </Pagination>
    </div>
  );
};

export default PaginationPage;
