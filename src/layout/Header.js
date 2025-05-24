import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import { FaTelegram,FaFacebookF   } from 'react-icons/fa';
import { FaLinkedinIn,FaUpwork    } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { PiSkypeLogo,PiTelegramLogo  } from "react-icons/pi";
import { FiMenu, FiX } from "react-icons/fi";
// import { RiAccountCircleLine } from "react-icons/ri";
// import { BsInfoSquare } from "react-icons/bs";
// import { BiSolidBookOpen } from "react-icons/bi";
// import { LuComponent } from "react-icons/lu";
// import { HiOutlineBadgeCheck } from "react-icons/hi";
// import { MdContacts } from "react-icons/md";
import Image from 'next/image';
const Header = ({ blog }) => {
    const [isHovered, setIsHovered] = useState(false);
  const [sideBarToggle, setSideBarToggle] = useState(false);
useEffect(() => {
  let cleanup;
  if (!blog) {
    cleanup = activeSection();
  }
  return () => {
    if (cleanup) cleanup();
  };
}, [blog]);

  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/" className="logo-text">
              Mahdi Hasan 
            </Link>
          </div>
          <button
            className="toggler-menu"
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            {sideBarToggle ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <Image style={{ objectFit: 'cover' }} width={100} height={100} src="/images/profile.png" title="" alt="" />
              </div>
              <h5>Mahdi Hasan</h5>
                <div className="nav justify-content-center social-icons">
                  <Link href="https://www.facebook.com/mahdihasanrumel" target="_blank">
                    <FaFacebookF  />
                  </Link>
                  <Link href="https://www.linkedin.com/in/mahdihasanin/" target="_blank">
                    <FaLinkedinIn  />
                  </Link>
                  <Link href="https://www.upwork.com/freelancers/~01d3d28a2fbcafdc7f" target="_blank">
                    <FaUpwork    />
                  </Link>
                  {/* <Link href="skype:mahdihasanmhr@gmail.com?chat">
                    <PiSkypeLogo     />
                  </Link> */}
                  <Link href="https://t.me/mahdihasanmhr" target="_blank">
                    <PiTelegramLogo     />
                  </Link>
                  <Link href="http://www.mhrtechnology.com" target="_blank">
                    <TbWorld   />
                  </Link>                    
                </div>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
    <div className="header-contact-info ">
      <button
        className={isHovered ? 'swapped' : 'primary'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="tel:+8801635592057">Phone</Link>
      </button>
      <button
        className={isHovered ? 'primary' : 'swapped'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="mailto:mahdihasanmhr@gmail.com">Email</Link>
      </button>
    </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="profile" >
        <Link className="nav-link" href="#profile">
          {/* <RiAccountCircleLine className="menu-icon"/> */}
          <span>Profile</span>
        </Link>
      </li>
      <li data-menuanchor="about">
        <Link className="nav-link" href="#about">
          {/* < BsInfoSquare className="menu-icon"/> */}
          <span>About Me</span>
        </Link>
      </li>
      <li data-menuanchor="skills">
        <Link className="nav-link" href="#skills">
          {/* <BiSolidBookOpen className="menu-icon"/> */}
          <span>Skills & Training </span>
        </Link>
      </li>
      <li data-menuanchor="work">
        <Link className="nav-link" href="#experience">
          {/* <HiOutlineBadgeCheck className="menu-icon" /> */}
          <span>Experience</span>
        </Link>
      </li>      
      <li data-menuanchor="contactus">
        <Link className="nav-link" href="#contactinfo">
          {/* <MdContacts  className="menu-icon"/> */}
          <span>Contact Info</span>
        </Link>
      </li>
    </ul>
    
  );
};


const MenuWithBlog = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home">
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about">
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services">
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Services</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link href="/#work">
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog">
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus">
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </a>
          </Link>
        </li>
      </ul>

    </Fragment>
  );
};
