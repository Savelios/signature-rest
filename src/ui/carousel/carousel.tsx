import { useRef, useState } from "react";

import './carousel.css'
import WineData from "../../dto/data/wine-data";

enum WinePositions {
  GRAND,
  SECOND,
  THIRD,
  FOURTH,
  FIVE,
  SIX,
  HIDDEN,
}

interface WinePosition {
  position: WinePositions;
  isRight: boolean;
}

interface CarouselProps {
  wines: WineData[];
  onImageClick: (index: number) => void;
}

export function Carousel({ wines, onImageClick }: CarouselProps) {

  const fullWidth = 350;

  const [currentGrand, setCurrentGrand] = useState(2);

  const handleWineImageChange = (index: number) => {
    setCurrentGrand(index);
  };

  const positionProperties = {
    [WinePositions.GRAND]: { width: 113, height: 400, left: 123, top: 0, zIndex: 100, },
    [WinePositions.SECOND]: { width: 93, height: 350, left: -75, top: 32, zIndex: 80, },
    [WinePositions.THIRD]: { width: 73, height: 280, left: -165, top: 45, zIndex: 60, },
    [WinePositions.FOURTH]: { width: 59, height: 256, left: -110, top: 50, zIndex: 40, },
    [WinePositions.FIVE]: { width: 53, height: 166, left: -15, top: 65, zIndex: 20, },
    [WinePositions.SIX]: { width: 27, height: 124, left: 50, top: 75, zIndex: 10, },
    [WinePositions.HIDDEN]: { width: 0, height: 0, left: 120, top: 120, zIndex: 0, },
  };

  const positionClasses = {
    [WinePositions.GRAND]: "grand",
    [WinePositions.SECOND]: "second",
    [WinePositions.THIRD]: "third",
    [WinePositions.FOURTH]: "fourth",
    [WinePositions.FIVE]: "five",
    [WinePositions.SIX]: "six",
    [WinePositions.HIDDEN]: "hidden",
  };

  function getPosition(index: number): WinePosition {
    const distance = index - currentGrand;
    if (Math.abs(distance) == 0) {
      return {
        position: WinePositions.GRAND,
        isRight: true
      }
    } else if (Math.abs(distance) == 1) {
      return {
        position: WinePositions.SECOND,
        isRight: distance < 0
      }
    } else if (Math.abs(distance) == 2) {
      return {
        position: WinePositions.THIRD,
        isRight: distance < 0
      }
    } else if (Math.abs(distance) == 3) {
      return {
        position: WinePositions.FOURTH,
        isRight: distance < 0
      }
    } else if (Math.abs(distance) == 4) {
      return {
        position: WinePositions.FIVE,
        isRight: distance < 0
      }
    } else if (Math.abs(distance) == 5) {
      return {
        position: WinePositions.SIX,
        isRight: distance < 0
      }
    } else {
      return {
        position: WinePositions.HIDDEN,
        isRight: true
      }
    }
  }

  return (
    <div className="carousel">
      {wines.map((wine, index) => {
        const position = getPosition(index)
        const positionProps = positionProperties[position.position]
        const wineImage = wine.image ? wine.image : '';

        function getSymmetricRightX() {
          return fullWidth - positionProps.width - positionProps.left;
        }
        function getSymmetricLeftX() {
          return fullWidth - positionProps.width - positionProps.left;
        }

        return (
          <img
            className={`carousel-img 
            ${positionClasses[position.position]} $`}
            src={wineImage}
            alt={`Bottle ${index + 1}`}
            onClick={() => { onImageClick(index); handleWineImageChange(index); }}
            style={
              position.isRight ?
                {
                  left: getSymmetricLeftX(),
                  zIndex: positionProps.zIndex
                } :
                {
                  left: positionProps.left,
                  right: getSymmetricRightX(),
                  zIndex: positionProps.zIndex
                }
            }
            key={index}
          />
        )
      }
      )}
    </div>
  );
} 