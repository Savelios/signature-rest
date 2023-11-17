import { useEffect, useState } from "react";
import './picture-indicator.css'
import PictureData from "../../../dto/data/picture-data";
import { PictureService } from "../../../services/PictureService";

interface PictureIndicatorProps {
    id: PictureData[],
    activeIndex: number;
    onIndicatorClick: (index: number) => void;
}

export const PictureIndicators: React.FC<PictureIndicatorProps> = ({
    id, activeIndex, onIndicatorClick
}) => {
    const selectedIndicator = id[activeIndex];
    const [pictures, setPictures] = useState<PictureData[]>([]);

    const pictureService = new PictureService();

    useEffect(() => {
        const fetchIdsFromBackend = async () => {
            try {
                const result = await pictureService.getAll();
                setPictures(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchIdsFromBackend();
    }, []);

    const handleClick = (id: number) => {
        const updatedPictures = pictures.map((picture, index) => {
            if (picture.id === id) {
                onIndicatorClick(index);
                return { ...picture, clicked: true };
            } else {
                return { ...picture, clicked: false };
            }
        });
        setPictures(updatedPictures);
    };

    return (
        <div className="picture-indicator-container">
            {pictures.map((picture, index) => (
                <div
                    className="picture-indicator"
                    key={picture.id}
                    style={{
                        background: activeIndex === index ? "#FFFFFF" : "#91793A"
                    }}
                    onClick={() => handleClick(picture.id)}
                ></div>
            ))}
        </div>
    )
};