import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { TfiFacebook,TfiWorld } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaUpwork,FaWhatsapp  } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
const Footer = () => {
  return (
    <section  className="footer">
      <div className="footer-top">
        <h2>Contact Details & Social Links</h2>
        <p> Get in touch or follow me online to stay updated on my latest projects and success stories.</p>
        <div className="footer-contact-btn">
          <Link href="tel:+8801635592057" target="_blank" className="footer-btn btn-email" title="Email Me">
              <MdOutlinePhone  className="footer-contact-btn-icon "/>
          </Link>
          <Link href="https://wa.me/+8801635592057" target="_blank" className="footer-btn btn-email" title="Email Me">
              <FaWhatsapp  className="footer-contact-btn-icon "/>
          </Link>
          <Link href="mailto:mahdihasanmhr@gmail.com" target="_blank" className="footer-btn btn-email" title="Email Me">
              <TfiEmail className="footer-contact-btn-icon "/>
          </Link>
          <Link href="https://www.facebook.com/mahdihasanrumel" target="_blank" className="footer-btn btn-email" title="Facebook Profile">
              <TfiFacebook className="footer-contact-btn-icon "/>
          </Link>
          <Link href="https://www.linkedin.com/in/mahdihasanin/" target="_blank" className="footer-btn btn-email" title="Facebook Profile">
              <GrLinkedinOption className="footer-contact-btn-icon "/>
          </Link>
          <Link href="https://www.upwork.com/freelancers/~01d3d28a2fbcafdc7f" target="_blank" className="footer-btn btn-email" title="Upwork Profile">
              <FaUpwork className="footer-contact-btn-icon "/>
          </Link>
          <Link href="https://t.me/mahdihasanmhr" target="_blank" className="footer-btn btn-email" title="Upwork Profile">
              <PiTelegramLogoLight className="footer-contact-btn-icon "/>
          </Link>
          <Link href="http://www.mhrtechnology.com/" target="_blank" className="footer-btn btn-email" title="Upwork Profile">
              <TfiWorld className="footer-contact-btn-icon "/>
          </Link>
        </div>
      </div>
        <p className="copyright-text"> &copy; 2025 Mahdi Hasan. All rights reserved.</p>
    </section>
  )}
export default Footer;
