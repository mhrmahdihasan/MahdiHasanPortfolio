import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import ParticlesBackground from "../src/components/ParticlesBackground";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import Footer from "../src/components/Footer";
import Image from 'next/image';
import Services from "../src/components/Services";
import SocialShareButtons from "../src/components/SocialShareButtons";
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
                  <h6>Hello, I&apos;m</h6>
                  <h1 className="font-alt">Mahdi Hasan</h1>
                  <p className="lead">
                    IT Engineer And Digital Business & Marketing Specialist <span id="type-it" />
                  </p>
                  <p className="desc">
                    Committed to growing your business through strategic planning and effective online marketing. Passionate about business development, digital strategy, and delivering real results. Driven by creativity, leadership, and a mindset of continuous improvement. Your success is my mission.
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
      {/* Inside this services have testimonial  */}
      <Services/>
      {/* Contact us */}
      <Contact />
      {/* Footer  */}
      <SocialShareButtons />
      <Footer/>
    </Layout>
  );
};
export default IndexParticles;
