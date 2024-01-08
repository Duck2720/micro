"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideContent.scss";
import Image from "next/image";
import image from "../../assets/images/slidecontentImage.png";

const SlideContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="TEXSVMMSTV" data-aos="fade-up">
      <Slider {...settings}>
        <div className="UFZMKPECVA">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="31"
            viewBox="0 0 35 31"
            fill="none"
          >
            <path
              d="M14.7371 1.36738V6.93292C14.7371 7.68808 14.1089 8.29972 13.3345 8.29972C10.571 8.29972 9.06756 11.0616 8.8589 16.5136H13.3345C14.1088 16.5136 14.7371 17.1261 14.7371 17.8804V29.6323C14.7371 30.3872 14.1089 30.9989 13.3345 30.9989H1.40204C0.627789 30.9989 -0.000652313 30.3865 -0.000652313 29.6323V17.8803C-0.000652313 15.267 0.270081 12.8689 0.801544 10.751C1.34752 8.57979 2.1856 6.68161 3.29197 5.1086C4.42981 3.49212 5.85437 2.22364 7.52357 1.34024C9.20543 0.451206 11.1605 0 13.3351 0C14.1088 0.000572205 14.7371 0.612787 14.7371 1.36738ZM32.8262 8.3002C33.6006 8.3002 34.2285 7.68808 34.2285 6.93397V1.36728C34.2285 0.612789 33.6006 0.00105286 32.8262 0.00105286C30.6527 0.00105286 28.6967 0.452354 27.0159 1.34129C25.3458 2.22459 23.9215 3.49202 22.7837 5.10965C21.6767 6.68266 20.8387 8.58094 20.2927 10.7532C19.761 12.8711 19.4908 15.2693 19.4908 17.8815V29.6335C19.4908 30.3884 20.1193 31 20.8934 31H32.8262C33.6006 31 34.2285 30.3878 34.2285 29.6335V17.8815C34.2285 17.1267 33.6006 16.5147 32.8262 16.5147H28.4135C28.6196 11.0622 30.1013 8.3002 32.8262 8.3002Z"
              fill="#7B8CF9"
            />
          </svg>
          <div className="VNWYZWDISC">
            <div className="MZJNJDFDQH">
              Internal stakeholders were happy with the final product. The team
              was able to communicate their progress clearly and concisely. They
              took the initiative and executed the project without much
              supervision Internal stakeholders were happy with the final
              product. The team was able to communicate their progress clearly
              and concisely. They took the initiative and executed the project
              without much supervision
            </div>
            <div className="KENJCSHWBM">
              <Image className="DDWKZNOIYY" src={image} alt={""}></Image>
              <span className="OCCZANLDYC">Mitchell Marsh</span>
              <span>UI/UX Designer</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlideContent;
