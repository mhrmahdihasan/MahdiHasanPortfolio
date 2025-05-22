import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import { FaLinkedin ,FaTelegram,FaSkype,FaChartPie   } from 'react-icons/fa';
import { FaSquareUpwork,FaSquareFacebook  } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsInfoSquare } from "react-icons/bs";
import { BiSolidBookOpen } from "react-icons/bi";
import { LuComponent } from "react-icons/lu";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import Image from 'next/image';
const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
  if (!blog) {
    activeSection();
  }
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
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
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
                <Image style={{ objectFit: 'cover' }} width={100} height={100} src="/images/profile.jpg" title="" alt="" />
              </div>
              <h5>Mahdi Hasan</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>
        <div className="nav justify-content-center social-icons">
          <Link href="https://www.facebook.com/mahdihasanrumel">
             <FaSquareFacebook  />
          </Link>
          <Link href="https://www.linkedin.com/in/mahdihasanin/">
             <FaLinkedin />
          </Link>
          <Link href="https://www.upwork.com/freelancers/~01d3d28a2fbcafdc7f">
             <FaSquareUpwork   />
          </Link>
          <Link href="skype:mahdihasanmhr@gmail.com?chat">
             <FaSkype     />
          </Link>
          <Link href="https://t.me/mahdihasanmhr">
             <FaTelegram    />
          </Link>
          <Link href="http://www.mhrtechnology.com">
             <TbWorld   />
          </Link>                    
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="profile" className="active">
        <Link className="nav-link" href="#profile">
          <RiAccountCircleLine className="menu-icon"/>
          <span>Profile</span>
        </Link>
      </li>
      <li data-menuanchor="about">
        <Link className="nav-link" href="#about">
          < BsInfoSquare className="menu-icon"/>
          <span>About Me</span>
        </Link>
      </li>
      <li data-menuanchor="education">
        <Link className="nav-link" href="#education">
          <BiSolidBookOpen className="menu-icon"/>
          <span>Education</span>
        </Link>
      </li>
      <li data-menuanchor="work">
        <Link className="nav-link" href="#experience">
          <HiOutlineBadgeCheck className="menu-icon" />
          <span>Experience</span>
        </Link>
      </li>
      <li data-menuanchor="contactus">
        <Link className="nav-link" href="#services">
          <LuComponent className="menu-icon"/>
          <span>Services</span>
        </Link>
      </li>
      
      <li data-menuanchor="contactus">
        <Link className="nav-link" href="#contactinfo">
          <MdContacts  className="menu-icon"/>
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
