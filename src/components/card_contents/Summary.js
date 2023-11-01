import React from "react";

const Summary = ({ setCurrentPage, selectedAddons, selectedPlan }) => {
  function setPlanPage() {
    setCurrentPage(2);
  }

  console.log(selectedAddons);
  return (
    <div>
      <h1 className="text-blue-900 font-bold text-3xl">Finishing up</h1>
      <p className="text-slate-400 text-lg mb-5">
        Double-check everything looks OK before confirming
      </p>

      <div className="bg-slate-100 p-3 rounded-xl">
        <div className="border-b flex items-center justify-between pb-4">
          <div>
            <h5 className="text-blue-900">
              {selectedPlan.name} ({selectedPlan.timeframe})
            </h5>
            <button
              className="text-slate-400 text-sm underline"
              onClick={setPlanPage}>
              Change
            </button>
          </div>
          <p className="text-blue-900 font-bold">{selectedPlan.price}</p>
        </div>
        <div>
          {selectedAddons.length > 0 && (
            <div>
              {selectedAddons[0].map((addon, index) => (
                <div key={index} className="flex justify-between my-2">
                  <p className="text-slate-400 text-sm">{addon.name}</p>
                  <p className="text-blue-900">{addon.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
