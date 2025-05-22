import dynamic from "next/dynamic";
import { AiOutlineFileSearch } from "react-icons/ai";
import { TbWorldSearch,TbAffiliateFilled } from "react-icons/tb";
import { LuFileSpreadsheet } from "react-icons/lu";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin,FaHeadset  } from "react-icons/fa6";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { GoChecklist } from "react-icons/go";
import { VscRemoteExplorer } from "react-icons/vsc";
import { FaUserSecret } from "react-icons/fa";
const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>What I do?</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <AiOutlineFileSearch className="service-icon"/>
              <div className="feature-content media-body">
                <h5>Lead Generation</h5>
                <p>
                  Expert in identifying and qualifying potential clients to drive targeted business growth and improve conversion rates.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <TbWorldSearch className="service-icon"/>
              <div className="feature-content media-body">
                <h5>Internet Research</h5>
                <p>
                  Accurate and fast web researcher with the ability to gather crucial data and insights for strategic business decisions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <LuFileSpreadsheet className="service-icon"/>
              <div className="feature-content media-body">
                <h5>Data Entry</h5>
                <p>
                  Detail-oriented and efficient in entering, updating, and managing data with 100% accuracy and confidentiality.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <RiContactsBook3Line className="service-icon" />
              <div className="feature-content media-body">
                <h5>Contact List Building</h5>
                <p>
                  Specialized in building verified and targeted contact lists for email outreach, sales campaigns, and networking.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <MdMarkEmailRead className="service-icon"/>
              <div className="feature-content media-body">
                <h5>Email Research</h5>
                <p>
                  Skilled in finding accurate and valid professional emails using advanced tools and techniques.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <FaLinkedin className="service-icon"/>
              <div className="feature-content media-body">
                <h5>LinkedIn Research</h5>
                <p>
                  Experienced in extracting targeted LinkedIn profiles and building B2B lists for outreach and business growth.
                </p>
              </div>
            </div>
          </div>
           <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <SiAmazonsimpleemailservice className="service-icon" />
              <div className="feature-content media-body">
                <h5>Email Marketing</h5>
                <p>
                  Crafting and executing email campaigns that engage audiences and generate measurable results.
                </p>
              </div>
            </div>
          </div>
           <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <TbAffiliateFilled className="service-icon" />
              <div className="feature-content media-body">
                <h5>Affiliate Marketing</h5>
                <p>
                  Knowledgeable in promoting products and services through strategic affiliate campaigns to earn commissions.
                </p>
              </div>
            </div>
          </div>          
           <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <GoChecklist  className="service-icon"/>
              <div className="feature-content media-body">
                <h5>Sailing Schedule</h5>
                <p>
                  Providing up-to-date and accurate sailing schedule data to support logistics, shipping, and freight operations.
                </p>
              </div>
            </div>
          </div>                    
           <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <VscRemoteExplorer  className="service-icon" />
              <div className="feature-content media-body">
                <h5>Virtual Assistant</h5>
                <p>
                 Reliable virtual assistant offering administrative, technical, and marketing support tailored to your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <FaHeadset    className="service-icon"/>
              <div className="feature-content media-body">
                <h5>Admin Support</h5>
                <p>
                 Professional in handling daily administrative tasks, ensuring smooth workflow and organizational efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <FaUserSecret  className="service-icon"/>
              <div className="feature-content media-body">
                <h5>Ethical Skip Tracing</h5>
                <p>
                 Ethical and accurate skip tracer, skilled in locating hard-to-find contacts using legal and proven methods.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <Testimonials />
      </div>
    </section>
  );
};
export default Services;
