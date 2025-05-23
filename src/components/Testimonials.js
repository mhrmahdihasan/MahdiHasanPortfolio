import { Fragment } from "react";
import Image from 'next/image';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="container">
        <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 ">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/indeed.png" className="rounded-circle" layout="responsive" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
             Mahdi consistently impressed with his dedication, precision, and adaptability. From lead generation to marketing coordination, he delivered quality results on time and with care. A true professional who adds value from day one.His professionalism and team spirit made him a key asset to our projects. We highly recommend him.
            </p>
            <h6>Indeed.com</h6>
            <span>Texas, United State</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 ">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/freepik.png" className="rounded-circle" layout="responsive" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
             Mahdi did a great job for us! He provides a good amount of leads with the quality required. Mahdi&apos;s reliability, professionalism, and affable demeanor made him a valued team player. I enthusiastically recommend Mahdi for his outstanding contributions and would eagerly welcome the opportunity to work with him again.
            </p>
            <h6>Freepik Company</h6>
            <span>Málaga, Spain</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 ">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/bellmedia.png" className="rounded-circle" layout="responsive" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            Mahdi was an amazing co-worker beside me, he&apos;s really smart and a brilliant Co-worker. Always he was ready to take new challenges also he&apos;s a quick learner. His hard work and dedication made me happy. Attitude, work quality, and movement were really admirable. I wish for his better luck. Definitely we will work again soon. 
            </p>
            <h6>Bell Media</h6>
            <span>Toronto, Canada</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 ">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/nord.png" className="rounded-circle" layout="responsive" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
             Mahdi was an integral member of my team, demonstrating exceptional intelligence, diligence, and a meticulous approach to his work since joining in 2019. His ability to consistently meet deadlines, maintain high-quality standards, and adapt to various roles—from lead generation to affiliate assistance. 
            </p>
            <h6>Nord Security</h6>
            <span>Amsterdam, Netherlands</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 ">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/autosuggest.png" className="rounded-circle" layout="responsive" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
             We want to thank Mahdi very much for his work in regards to data collection and data validation. He is a true expert in this field and we are looking forward to working together with him in the future again. The project was completed successfully. He delivered accurate results on time and communicated well throughout.
            </p>
            <h6>AutoSuggest </h6>
            <span>Birkirkara, Malta </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 ">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/biotix-care.png" className="rounded-circle" layout="responsive" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
             It was really a good experience working with Mahdi, and his quality of work was excellent. He is a good team member. Just ending this contract due to some working break, but we will appoint Mahdi again in the future. His communication was always clear and timely, making collaboration smooth and efficient. 
            </p>
            <h6>Biotix Care </h6>
            <span>Quebec, Canada </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 ">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/hochneun.png" className="rounded-circle" layout="responsive" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
             Great collaboration, all my instructions were followed with a lot of attention to detail and to my satisfaction. Quick response time, quick turnaround time. Very high quality leads. Thank you very much! I will come back for more. Mahdi truly understands client requirements and delivers beyond expectations. 
            </p>
            <h6>HOCH NEUN GmbH </h6>
            <span>Munich, Germany </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 ">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/stox.png" className="rounded-circle" layout="responsive" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
             Mahdi is professional, dedicated, and punctual. I&apos;m already hiring him for my next project and would gladly recommend him. He quickly understood what was needed and delivered excellent results with little guidance. His attention to detail and commitment to quality made working with him a great experience.
            </p>
            <h6>Distribution Stox </h6>
            <span>Quebec, Canada </span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
      </div>
    </Fragment>
  );
};
export default Testimonials;
