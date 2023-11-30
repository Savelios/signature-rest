import { useState } from "react";
import "./about-indicator.css";
export const AboutIndicators = () => {
  const countDots = 5;
  const [selectedDot, setSelectedDot] = useState<number>(0);

  return (
    <div className="about-view__indicators">
      {[0, 1, 2, 3, 4].map((index) => {
        return (
          <div
            className="about-view__indicator-container"
            style={{
              width: 10,
              borderRadius: 50,
              height: 10,
              marginLeft: 10,
              zIndex: 0,
              background: selectedDot === index ? "#FFFFFF" : "#002024",
            }}
            onClick={(e) => {
              setSelectedDot(index);
            }}
          ></div>
        );
      })}
    </div>
  );
};
