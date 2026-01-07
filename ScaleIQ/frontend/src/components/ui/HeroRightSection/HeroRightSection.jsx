import React from "react";
import "./heroright.scss";

export const HeroRightSection = () => {
  return (
    <div className="space-tunnel">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="cube-frame"></div>
      ))}
    </div>
  );
};
