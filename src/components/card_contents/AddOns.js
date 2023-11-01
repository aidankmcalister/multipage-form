import React, { useState } from "react";
import checkIcon from "../../assets/imgs/icon-checkmark.svg";

const AddonsData = [
  {
    name: "Online Service",
    description: "Access to multiplayer games",
    price: "$1/mo",
  },
  {
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    price: "$2/mo",
  },
  {
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: "$2/mo",
  },
];

const Addons = ({ updateSelectedAddons }) => {
  const [toggledAddons, setToggledAddons] = useState([false, false, false]);

  const toggleAddon = (index) => {
    const newAddons = [...toggledAddons];
    newAddons[index] = !newAddons[index];
    setToggledAddons(newAddons);
  };

  const handleLogSelectedAddons = () => {
    const selectedAddons = AddonsData.filter(
      (addon, index) => toggledAddons[index]
    );
    updateSelectedAddons(selectedAddons);
  };

  return (
    <div>
      <h1 className="text-blue-900 font-bold text-3xl">Pick add-ons</h1>
      <p className="text-slate-400 text-lg mb-5">
        Add-ons help enhance your gaming experience.
      </p>

      {AddonsData.map((addon, index) => (
        <div
          key={index}
          className={`border border-gray-300 rounded-md p-4 flex items-center my-2 ${
            toggledAddons[index] ? "bg-blue-600 bg-opacity-10" : ""
          }`}
          onClick={() => toggleAddon(index)}>
          <img
            className={`p-1 py-1.5 border border-blue-900 mr-3 rounded-lg ${
              toggledAddons[index] ? "bg-blue-900" : "bg-white"
            }`}
            width={30}
            src={checkIcon}
            alt="Checkbox"
          />
          <div className="flex flex-col justify-start">
            <h5 className="text-blue-900 font-bold">{addon.name}</h5>
            <p className="text-slate-400 text-sm">{addon.description}</p>
          </div>
          <p className="text-sm text-blue-900 ml-auto">{addon.price}</p>
        </div>
      ))}
      <button onClick={handleLogSelectedAddons}>Log Selected Add-ons</button>
    </div>
  );
};

export default Addons;

// import React, { useState } from "react";
// import checkIcon from "../../assets/imgs/icon-checkmark.svg";

// const AddonsData = [
//   {
//     name: "Online Service",
//     description: "Access to multiplayer games",
//     price: "$1/mo",
//   },
//   {
//     name: "Larger Storage",
//     description: "Extra 1TB of cloud save",
//     price: "$2/mo",
//   },
//   {
//     name: "Customizable Profile",
//     description: "Custom theme on your profile",
//     price: "$2/mo",
//   },
// ];

// const Addons = ({ updateSelectedAddons }) => {
//   const [toggledAddons, setToggledAddons] = useState([false, false, false]);

//   const toggleAddon = (index) => {
//     const newAddons = [...toggledAddons];
//     newAddons[index] = !newAddons[index];
//     setToggledAddons(newAddons);
//   };

//   const handleLogSelectedAddons = () => {
//     const selectedAddons = AddonsData.filter(
//       (addon, index) => toggledAddons[index]
//     );
//     updateSelectedAddons(selectedAddons);
//     console.log("Selected AddOns:", selectedAddons);
//   };

//   return (
//     <div>
//       <h1 className="text-blue-900 font-bold text-3xl">Pick add-ons</h1>
//       <p className="text-slate-400 text-lg mb-5">
//         Add-ons help enhance your gaming experience.
//       </p>

//       {AddonsData.map((addon, index) => (
//         <div
//           key={index}
//           className={`border border-gray-300 rounded-md p-4 flex items-center my-2 ${
//             toggledAddons[index] ? "bg-blue-600 bg-opacity-10" : ""
//           }`}
//           onClick={() => toggleAddon(index)}>
//           <img
//             className={`p-1 py-1.5 border border-blue-900 mr-3 rounded-lg ${
//               toggledAddons[index] ? "bg-blue-900" : "bg-white"
//             }`}
//             width={30}
//             src={checkIcon}
//             alt="Checkbox"
//           />
//           <div className="flex flex-col justify-start">
//             <h5 className="text-blue-900 font-bold">{addon.name}</h5>
//             <p className="text-slate-400 text-sm">{addon.description}</p>
//           </div>
//           <p className="text-sm text-blue-900 ml-auto">{addon.price}</p>
//         </div>
//       ))}
//       <button onClick={handleLogSelectedAddons}>Log Selected Add-ons</button>
//     </div>
//   );
// };

// export default Addons;
