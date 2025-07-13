import React from "react";

const LocationSearchPanel = (props) => {
  // sample array for location
  const locations = [
    "24B, Near Kapoor's cafe, Sheryian's Coding School, Bhopal",
    "22C, Near Malhotra's cafe, Sheryian's Coding School, Bhopal",
    "20B, Near Singhnia's cafe, Sheryian's Coding School, Bhopal",
    "18A, Near Sharma's cafe, Sheryian's Coding School, Bhopal",
  ];

  return (
    <div>
      {/* this is just a sample data */}
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
