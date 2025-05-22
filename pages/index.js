import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import ParticlesBackground from "../src/components/ParticlesBackground";
import Services from "../src/components/Services";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Image from 'next/image';
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const IndexParticles = () => {
  return (
    <Layout>
      <section
        id="profile"
        data-nav-tooltip="profile"
        className="pp-section pp-scrollable"
      >
        
        <div className="home-banner">
          {/* <div id="particles-box" className="particles" /> */}
          <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Mahdi Hasan</h1>
                  <p className="lead">
                    IT Engineer And Digital Business & Marketing Specialist <span id="type-it" />
                  </p>
                  <p className="desc">
                    Digital Marketer & Business Consultant passionate about growth, strategy, and helping businesses scale through proven online marketing techniques. Founder of Mhr Tech, driven by creativity, leadership, and lifelong learning.
                  </p>
                  <div className="btn-bar">
                    <Link href="#" className="px-btn px-btn-theme">
                      Donwload CV
                    </Link>                    
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="hb-img">
                  <Image src="/images/profile-hero-section.png" layout="responsive" className="banner-right-img bor" width={500} height={500} title="Mahdi Hasan-IT Engineer" alt="IT Engineer And Digital Business & Marketing Specialist" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Contact us */}
      <Contact />
      {/* Footer  */}
      <Footer/>
    </Layout>
  );
};
export default IndexParticles;
