import React from "react";
import "./CreativeTeam.scss";
import TittleHome from "../Common/TittleHome";
import Image from "next/image";
import image1 from "../../assets/images/cretiveTeam/1.png";
import image2 from "../../assets/images/cretiveTeam/2.png";
import image3 from "../../assets/images/cretiveTeam/3.png";
import image4 from "../../assets/images/cretiveTeam/4.png";
import image5 from "../../assets/images/cretiveTeam/5.png";
import image6 from "../../assets/images/cretiveTeam/6.png";

const CreativeTeam = () => {
  return (
    <div className="OMWSYUVSYK" data-aos="fade-up">
      <div className="SASXOYGKEC">
        <div className="TSOJZAXVHV">
          <TittleHome titleBlack={"Our Creative"} titleBlue={"Team"} />
          <div className="NYLOSISZQN">
            <div className="GZCHEJFUIF">
              Flowgiri is a creative and modern theme for startups, freelancers
              and creatives.{" "}
            </div>
          </div>
          <div className="EOMIMGHDLO">
            <div className="ORDPUDXRFZ">
              <Image className="WZHIALXKRJ" src={image1} alt={""}></Image>
              <Image className="WZHIALXKRJ" src={image2} alt={""}></Image>
              <Image className="WZHIALXKRJ" src={image3} alt={""}></Image>
              <Image className="WZHIALXKRJ" src={image4} alt={""}></Image>
              <Image className="WZHIALXKRJ" src={image5} alt={""}></Image>
              <Image className="WZHIALXKRJ" src={image6} alt={""}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTeam;
