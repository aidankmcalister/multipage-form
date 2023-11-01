import React from "react";

const NavigateButtons = ({ currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center top-14 absolute left-0 right-0 m-auto">
      {Array.from({ length: 4 }, (_, index) => (
        <button
          key={index}
          className={`mx-1 w-10 h-10 border-2 border-white text-white rounded-full text-lg ${
            currentPage === index + 1 ? "bg-white text-blue-900 font-bold" : ""
          }`}
          onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default NavigateButtons;
