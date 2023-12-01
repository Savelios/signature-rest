import React, { useState } from "react";
import { AboutIndicators } from "../../ui/indicator/about/about-indicator";
import { AboutView } from "../../components/views/about/AboutView";
import ReserveForm from "../../components/forms/reserve/reserve-form";

import "./AboutPage.css"

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
      {isModalOpen && <ReserveForm onCloseModal={handleCloseModal} />}
    </>
  );
};
export default AboutPage;
