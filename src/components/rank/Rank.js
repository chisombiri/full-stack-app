import React from "react";

const Rank = ({ username, entries }) => {
  return (
    <div>
      <div className="white f3">Hey {username}, your current entries are:</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
