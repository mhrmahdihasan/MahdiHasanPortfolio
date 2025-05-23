import emailjs from "emailjs-com";
import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Link from "next/link";
const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id="contactinfo"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Contact info</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-5 m-15px-tb">
            <div className="contact-info">
              <h4>Feel free to reach out for collaboration</h4>
              <p>
                Let’s connect and grow your digital presence together. Your next digital move starts with a conversation.
              </p>
              <ul>
                <li className="media">
                  <Link href="tel:+8801635592057">
                  <MdOutlinePhone className="contact-form-icon"/>
                  <span className="contact-details ">+8801635592057</span>
                  </Link>
                </li>
                <li className="media">
                  <Link href="https://wa.me/+8801635592057 " className="dark-bg">
                  <FaWhatsapp className="contact-form-icon"/>
                  <span className="contact-details"> +8801635592057</span>
                  </Link>
                </li>
                <li className="media">                  
                  <Link href="mailto:mahdihasanmhr@gmail.com">
                  <TfiEmail className="contact-form-icon"/>
                  <span className="contact-details ">mahdihasanmhr@gmail.com</span>
                  </Link>
                </li>
                <li className="media">                  
                  <Link href="mailto:mahdi@mhrtechnology.com ">
                  <FiSend className="contact-form-icon"/>
                  <span className="contact-details ">mahdi@mhrtechnology.com </span>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${
                          error ? (!name ? "invalid" : "") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${
                          error ? (!email ? "invalid" : "") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${
                          error ? (!subject ? "invalid" : "") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                         style={{ resize: "none" }}
                        className={` form-control ${
                          error ? (!message ? "invalid" : "") : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      {/* <button
                        onSubmit={(e) => onSubmit(e)}
                        className="px-btn px-btn-theme"
                        type="button"
                        value="Send"
                      >
                        {" "}
                        send message
                      </button> */}
                      <input
                        className="px-btn px-btn-theme"
                        type="submit"
                        value="send message"
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{
                        display:
                          error !== null ? (!error ? "block" : "none") : "none",
                      }}
                    >
                      Message Sent Successfully
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={{ display: "none" }}
                    >
                      Message Sending Failed
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
