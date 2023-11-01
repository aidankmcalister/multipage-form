// App.js
import React, { useState } from "react";
import "./App.css";
import NavigateButtons from "./NavigateButtons";
import bgGraphicsMobile from "./assets/imgs/bg-sidebar-mobile.svg";
import MainCard from "./components/MainCard";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Function to update isFormValid
  const handleFormValidUpdate = (valid) => {
    setIsFormValid(valid);
  };

  // Function to update selected plan
  const handleSelectedPlanUpdate = (plan) => {
    setSelectedPlan(plan);
  };

  // Function to update selected add-ons
  const handleSelectedAddonsUpdate = (addons) => {
    setSelectedAddons(addons);
  };

  // Function to handle the "Next Step" button click
  const handleNextStep = () => {
    // Define your conditions here
    if (currentPage === 1 && isFormValid) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 2 && selectedPlan.name) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center flex-col h-screen">
      <img
        className="w-full absolute -z-10 top-0 scale-110"
        src={bgGraphicsMobile}
        alt="background graphics"
      />
      <NavigateButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex items-center flex-1">
        <MainCard
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          updateFormValid={handleFormValidUpdate}
          updateSelectedPlan={handleSelectedPlanUpdate}
          updateSelectedAddons={handleSelectedAddonsUpdate}
        />
      </div>
      <div className="bottom-0 w-screen bg-white p-2 flex justify-end">
        <button
          type="button"
          className={`p-4 flex justify-center bg-blue-800 text-white rounded-lg ${
            currentPage === 4 ? "pointer-events-none" : ""
          }`}
          onClick={handleNextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import NavigateButtons from "./NavigateButtons";
// import bgGraphicsMobile from "./assets/imgs/bg-sidebar-mobile.svg";
// import MainCard from "./components/MainCard";

// // import { useFormik } from "formik"; // Import useFormik from Formik

// function App() {
//   const [currentPage, setCurrentPage] = useState(1);

//   return (
//     <div className="flex justify-center flex-col h-screen">
//       <img
//         className="w-full absolute -z-10 top-0 scale-110"
//         src={bgGraphicsMobile}
//         alt="background graphics"
//       />
//       <NavigateButtons
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//       <div className="flex items-center flex-1">
//         <MainCard currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       </div>
//       <div className="bottom-0 w-screen bg-white p-2 flex justify-end">
//         <button
//           type="button"
//           className="p-4 flex justify-center bg-blue-800 text-white rounded-lg">
//           Next Step
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
