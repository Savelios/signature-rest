import React, { useState } from "react";
import "./wine-categories.css";

const WineIndicator = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderIndicators = () => {
    const indicatorData = [
      { name: "ЛЮБЫЕ", className: "gold-dot" },
      { name: "КРАСНОЕ", className: "red-dot" },
      { name: "ЗЕЛЕНОЕ", className: "white-dot" },
      { name: "РОЗОВОЕ", className: "pink-dot" },
      { name: "ИГРИСТОЕ", className: "spark-dot" },
    ];

    return indicatorData.map((data, index) => {
      const isActive = index === activeIndex;
      return (
        <div
          key={index}
          className={`indicator ${data.className} ${isActive ? "active" : ""}`}
          onClick={() => handleIndicatorClick(index)}
        >
          <div className="indicator-names-container">
            <div className="indicator-name">{data.name}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="indicators-container">
      {/* <div className="shape">{activeIndex}</div> */}
      <div className="indicators">{renderIndicators()}</div>
    </div>
  );
};

export default WineIndicator;
