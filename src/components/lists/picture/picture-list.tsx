import { useEffect, useState } from "react";
import { PictureIndicators } from "../../../ui/indicator/picture/picture-indicator";
import PictureData from "../../../dto/data/picture-data";
import { PictureService } from "../../../services/PictureService";
import { PictureView } from "../../views/picture/PictureView";

import './picture-list.css'

export function PictureList() {
  const pictureService = new PictureService();
  const [activePictureIndex, setActivePictureIndex] = useState(0);
  const [pictures, setPictures] = useState<PictureData[]>([]);
  const activePicture = pictures[activePictureIndex];

  useEffect(() => {
    const fetchPicturesFromBackend = async () => {
      try {
        const result = await pictureService.getAll();
        setPictures(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPicturesFromBackend();
  }, []);

  const handleImageClick = (id: number) => {
    const updatedPictures = pictures.map((picture, index) => {
      if (picture.id === id) {
        setActivePictureIndex(index);
        return { ...picture, clicked: true };
      } else {
        return { ...picture, clicked: false };
      }
    });
    moveTo(`container-${id}`);
    setPictures(updatedPictures);
  };

  useEffect(() => {
    moveTo(`container-${activePicture?.id}`);
  }, [activePicture]);

  const moveTo = (item: string) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleIndicatorClick = (index: number) => {
    setActivePictureIndex(index);
  };

  return (
    <>
      <PictureIndicators
        id={pictures}
        activeIndex={activePictureIndex}
        onIndicatorClick={handleIndicatorClick}
      />
      <PictureView
        onImageClick={handleImageClick}
        selectedPictureIndex={activePictureIndex}
        pictures={pictures}
      />
    </>
  );
}


