import React, { useState } from "react";
import arcadeIcon from "../../assets/imgs/icon-arcade.svg";
import advancedIcon from "../../assets/imgs/icon-advanced.svg";
import proIcon from "../../assets/imgs/icon-pro.svg";

const Plans = ({ updateSelectedPlan }) => {
  const [planTimeframe, setPlanTimeframe] = useState("monthly");
  const [toggledIndex, setToggledIndex] = useState(null);

  const toggleDiv = (index) => {
    if (toggledIndex === index) {
      setToggledIndex(null);
    } else {
      setToggledIndex(index);
    }
  };

  const handlePlanTimeframeChange = () => {
    setPlanTimeframe((prevTimeframe) =>
      prevTimeframe === "monthly" ? "yearly" : "monthly"
    );
    updateSelectedPlan({});
  };

  const getPlan = (index) => {
    return {
      name: ["Arcade", "Advanced", "Pro"][index],
      timeframe: planTimeframe,
      price:
        planTimeframe === "yearly"
          ? ["$90/yr", "$120/yr", "$150/yr"][index]
          : ["$9/mo", "$12/mo", "$15/mo"][index],
    };
  };

  const toggleOnclick = (index) => {
    if (toggledIndex !== index) {
      toggleDiv(index);
      const selectedPlan = getPlan(index);
      updateSelectedPlan(selectedPlan);
    }
  };

  return (
    <div>
      <h1 className="text-blue-900 font-bold text-3xl">Select your plan</h1>
      <p className="text-slate-400 text-lg mb-5">
        You have the option of monthly or yearly billing
      </p>

      {["Arcade", "Advanced", "Pro"].map((plan, index) => (
        <div
          key={index}
          className={`rounded-md p-4 flex items-center my-2 ${
            toggledIndex === index
              ? "bg-blue-600 bg-opacity-10 border-blue-900 border"
              : "border border-gray-300"
          }`}
          onClick={() => toggleOnclick(index)}>
          <img
            width={45}
            src={
              index === 0 ? arcadeIcon : index === 1 ? advancedIcon : proIcon
            }
            alt={`${plan} Plan Tier Icon`}
          />
          <div className="ml-3">
            <h5 className="text-blue-900 font-bold">{plan}</h5>
            <p className="text-slate-400 text-sm">{getPlan(index).price}</p>
            <p
              className={`text-blue-900 font-bold text-sm ${
                planTimeframe === "yearly" ? "block" : "hidden"
              }`}>
              2 months free
            </p>
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center bottom-0 bg-slate-100 p-2 rounded-lg font-bold text-blue-900">
        <h5
          className={`${
            planTimeframe === "monthly" ? "text-blue-900" : "text-gray-400"
          }`}>
          Monthly
        </h5>
        <label className="mx-4 relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="planTimeframeSelector"
            value=""
            className="sr-only peer"
            checked={planTimeframe === "yearly"}
            onChange={handlePlanTimeframeChange}
          />
          <div className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <h5
          className={`${
            planTimeframe === "yearly" ? "text-blue-900" : "text-gray-400"
          }`}>
          Yearly
        </h5>
      </div>
    </div>
  );
};

export default Plans;
