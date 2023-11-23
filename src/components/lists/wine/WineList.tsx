import React, { useEffect, useState } from "react";
import { WineView } from "../../views/wine/WineView";
import WineIndicator from "../../categories/wine/wine-categories";
import { WineService } from "../../../services/WineService";
import WineData from "../../../dto/data/wine-data";
import { Carousel } from "../../../ui/carousel/carousel";
import "./WineList.css";
import Loader from "../../../ui/loader/loader";
// import wineTopImg from "../../../asset  s/wines-top-img.png"

export function WineList() {
  const wineService = new WineService();
  const [wines, setWines] = useState<WineData[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    const fetchWinesFromBackend = async () => {
      try {
        const result = await wineService.getAll();
        console.log("Received data from the backend:", result);
        setWines(result);
      } catch (error) {
        console.log("FetchWinesFromBackendError" + error);
      }
    };

    fetchWinesFromBackend();
  }, []);

  const handleWineImageChange = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="wine-list__container" >

      {wines.length > 0 && (
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <WineIndicator />
            <Carousel
              wines={wines}
              onImageClick={handleWineImageChange}
            />
          </div>
          <WineView
            wines={wines}
            selectedWineIndex={selectedImageIndex}
            onImageChange={handleWineImageChange}
          />
        </>
      )}
      {wines.length === 0 && <Loader />}
    </div>
  );
}
