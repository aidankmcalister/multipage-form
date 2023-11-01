import React, { useState } from "react";
import PersonalInfo from "./card_contents/PersonalInfo";
import Plans from "./card_contents/Plans";
import AddOns from "./card_contents/AddOns";
import Summary from "./card_contents/Summary";

const MainCard = ({ currentPage, setCurrentPage }) => {
  const [selectedPlan, setSelectedPlan] = useState({});
  const [selectedAddons, setSelectedAddons] = useState([]);

  const updateSelectedAddons = (addon) => {
    setSelectedAddons([...selectedAddons, addon]);
  };

  const updateSelectedPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="p-5 py-7 m-4 bg-white rounded-xl shadow-md">
      {currentPage === 1 && <PersonalInfo />}
      {currentPage === 2 && <Plans updateSelectedPlan={updateSelectedPlan} />}
      {currentPage === 3 && (
        <AddOns updateSelectedAddons={updateSelectedAddons} />
      )}
      {currentPage === 4 && (
        <Summary
          setCurrentPage={setCurrentPage}
          selectedAddons={selectedAddons}
          selectedPlan={selectedPlan}
        />
      )}
    </div>
  );
};

export default MainCard;
