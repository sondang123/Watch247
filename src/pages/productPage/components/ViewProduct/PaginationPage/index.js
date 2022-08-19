import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationPage = ({
  queryFilter,
  setQueryFilter,
  setDataViewWatch,
  dataViewWatch,
  totalPage,
}) => {
  const numberPage = [];
  const totalPages = Math.ceil(totalPage / queryFilter.limit - 1);

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
  if (totalPages && dataViewWatch && queryFilter) {
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
        {/* <Pagination.Item onClick={() => handlePage(1)}>{1} </Pagination.Item> */}
        {/* <Pagination.Item>{2}</Pagination.Item>
    <Pagination.Item>{3}</Pagination.Item>
    <Pagination.Item>{4}</Pagination.Item>
    <Pagination.Ellipsis />

    <Pagination.Item>{10}</Pagination.Item>
    <Pagination.Item>{11}</Pagination.Item>
    <Pagination.Item>{13}</Pagination.Item> */}
        {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

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
