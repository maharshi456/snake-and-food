import React from "react";

const Food = ({ foodDot }) => {
  const style = {
    left: `${foodDot[0]}%`,
    top: `${foodDot[1]}%`,
  };
  return <div className="snake-food" style={style} />;
};

export default Food;
