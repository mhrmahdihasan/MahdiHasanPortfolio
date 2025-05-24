import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+8801635592057"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsappButton;
