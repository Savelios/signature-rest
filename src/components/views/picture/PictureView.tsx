import React, { useEffect, useRef, useState } from "react";
import PictureData from "../../../dto/data/picture-data";

import "./PictureView.css";

interface PictureViewProps {
  pictures: PictureData[];
  selectedPictureIndex: number;
  onImageClick: (index: number) => void;
};

export function PictureView(props: PictureViewProps) {
  const pictureListRef = useRef<HTMLDivElement | null>(null);
  const { pictures, selectedPictureIndex, onImageClick } = props
  const selectedPicture = pictures[selectedPictureIndex];

  if (!selectedPicture) {
    return null;
  }

  return (
    <div className="picture-view__main-container" ref={pictureListRef}>
      {pictures &&
        pictures.length > 0 &&
        pictures.map((picture, index) => (
          <div
            className={`picture-view__card-container ${index === selectedPictureIndex ? "clicked" : ""}`}
            key={picture.id}
          >
            <img
              className={`picture-view__img ${index === selectedPictureIndex ? "clicked" : ""}`}
              src={picture.image}
              alt="Painting"
              id={`container-${picture.id}`}
              onClick={() => onImageClick(picture.id)}
            />
            <div className="picture-view__container-info">
              <h1>
                НОКТЮРН <span>В ХОЛОДНЫХ ТОНАХ</span>
              </h1>
              <div className="picture-view__person-container">
                <img
                  className="picture-view__person-avatar"
                  src={'artist'}
                  alt="Artist"
                />
                <div className="picture-view__person-name-container">
                  <p className="picture-view__person-name">{picture.title}</p>
                  <a
                    className="picture-view__person-social-link"
                    href="https://www.instagram.com/ivan_fedotov_art/"
                  >
                    @ivan_fedotov_art
                  </a>
                </div>
              </div>
              <p className="picture-view__about-person-text">
                {picture.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}