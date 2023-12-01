import React, { useState } from "react";
import { AboutIndicators } from "../../ui/indicator/about/about-indicator";
import { AboutView } from "../../components/views/about/AboutView";
import ReserveForm from "../../components/forms/reserve/reserve-form";

import "./AboutPage.css";

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <h1 className="about-page__title">О НАС</h1>
      <AboutIndicators />
      <AboutView onOpenModal={handleOpenModal} />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0px 32px 0px",
        }}
      >
        <button className="about-view__bottom-btn" onClick={handleOpenModal}>
          Забронировать столик
        </button>
      </div>
      {isModalOpen && <ReserveForm onCloseModal={handleCloseModal} />}
    </>
  );
};
export default AboutPage;
