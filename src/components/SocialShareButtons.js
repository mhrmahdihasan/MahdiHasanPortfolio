// components/SocialShareButtons.js
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import Link from "next/link";

const SocialShareButtons = () => {
  return (
    <div className="social-share-container">
      <Link
        href="https://www.facebook.com/mahdihasanrumel"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mahdihasanin/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaLinkedin />
      </Link>
      <Link
        href="https://www.upwork.com/freelancers/~01d3d28a2fbcafdc7f"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaSquareUpwork />
      </Link>
    </div>
  );
};

export default SocialShareButtons;
