import React from "react";
import { FaSkype } from "react-icons/fa";

const SkypeButton = () => {
  return (
    <a
      href="skype:mahdihasanmhr@gmail.com?chat"
      target="_blank"
      rel="noopener noreferrer"
      className="skype-button"
    >
      <FaSkype size={24} />
    </a>
  );
};

export default SkypeButton;
