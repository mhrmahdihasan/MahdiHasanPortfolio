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
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <Image  width={150} height={150}  src="/images/client-profile.png" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
             Mahdi consistently impressed with his dedication, precision, and adaptability. From lead generation to Marketing coordination, he delivered quality results on time and with care. His professionalism and team spirit made him a key asset to our projects. We highly recommend him.
            </p>
            <h6>Indeed.com</h6>
            <span>Texas, United State</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            {/* <Image className="testimonial-profile"  src="/img/client-profile.png" title="" alt="" /> */}
          </div>
          <div className="media-body">
            <p>
              Mahdi did a great job for us! He provides a good amount of leads with the quality required. We would hire him again for new projects!
            </p>
            <h6>Freepik Company</h6>
            <span>Málaga, Spain</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            {/* <Image className="testimonial-profile" src="/img/client-profile.png" title="" alt="" /> */}
          </div>
          <div className="media-body">
            <p>
             Mahdi was an amazing co-worker beside me, he&apos;s really smart and a brilliant Co-worker. Always he was ready to take new challenges also he&apos;s a quick learner. His hard work and dedication made me happy. Attitude, work quality, and movement were really admirable. I wish for his better luck. Definitely we will work again soon. Thanks.

            </p>
            <h6>Bell Media</h6>
            <span>Toronto, Canada</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            {/* <Image className="testimonial-profile" src="/img/client-profile.png" title="" alt="" /> */}
          </div>
          <div className="media-body">
            <p>
              Mahdi was an integral member of my team, demonstrating exceptional intelligence, diligence, and a meticulous approach to his work since joining in 2019. His ability to consistently meet deadlines, maintain high-quality standards, and adapt to various roles—from lead generation to affiliate assistance—showcased his versatility and dedication. Mahdi&apos;s reliability, professionalism, and affable demeanor made him a valued team player. I enthusiastically recommend Mahdi for his outstanding contributions and would eagerly welcome the opportunity to work with him again.
            </p>
            <h6>Nord Security</h6>
            <span>Amsterdam, Netherlands</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            {/* <Image className="testimonial-profile" src="/img/client-profile.png" title="" alt="" /> */}
          </div>
          <div className="media-body">
            <p>
              We want to thank Mahdi very much for his work in regards to data collection and data validation. He is a true expert in this field and we are looking forward to work together with him in the future again. The project was completed successfully.
            </p>
            <h6>AutoSuggest </h6>
            <span>Birkirkara, Malta </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            {/* <Image className="testimonial-profile" src="/img/client-profile.png" title="" alt="" /> */}
          </div>
          <div className="media-body">
            <p>
             It was really a good experience working with Mahdi, and his quality of work was excellent. He is a good team Member. Just ending this contract due to some working break, but we will appoint Mahdi again in the future.
            </p>
            <h6>Biotix Care </h6>
            <span>Quebec, Canada </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            {/* <Image className="testimonial-profile" src="/img/client-profile.png" title="" alt="" /> */}
          </div>
          <div className="media-body">
            <p>
             Great collaboration, all my instructions were followed with a lot of attention to detail and to my satisfaction. Quick response time, quick turnaround time. Very high quality leads. Thank you very much! I will come back for more.
            </p>
            <h6>HOCH NEUN GmbH </h6>
            <span>Munich, Germany </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            {/* <Image className="testimonial-profile" src="/img/client-profile.png" title="" alt="" /> */}
          </div>
          <div className="media-body">
            <p>
             Mahdi is a very professional, dedicated, punctual, and hard worker. I am hiring him again for my next projects. Someone, I would recommend over and over.
            </p>
            <h6>Distribution Stox </h6>
            <span>Quebec, Canada </span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
