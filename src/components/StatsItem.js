import React from "react";

const StatsItem = ({ title, value }) => {
  return (
    <div className="text-white">
      <h6>{ title.toUpperCase() }</h6>
      <h6>{ value }</h6>
    </div>
  );
};

export default StatsItem;
