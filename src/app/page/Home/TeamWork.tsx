import React from "react";
import ContentHome from "../Common/ContentHome";
import "./TeamWork.scss";
import weather from "../../assets/images/weather.png";
import calling from "../../assets/images/calling.png";
import dashboard from "../../assets/images/dashboard.png";
import editing from "../../assets/images/editting.png";
import TittleHome from "../Common/TittleHome";

const TeamWork = () => {
  return (
    <div className="BHYVEAISMG" >
      <div className="WBAJUKSOUQ">
        <span className="NSEZEEDNRH">
          <TittleHome titleBlack={"Our Team’s"} titleBlue={"Work"} />
        </span>
        <ContentHome
          title1={"Mobile app, Weather,Software"}
          title2={"Weather App UI Kit - WETHY "}
          title3={
            "Hello Designers! This is the video calling website landing page design concept. Video calling software is very popular nowadays."
          }
          title4={"VIEW PORTFOLIO"}
          image={weather}
          type={"1"}
        />
        <ContentHome
          title1={"Mobile app, Weather,Software"}
          title2={"Video Calling Website - Jabber "}
          title3={
            "WEATHY is a modern and clean mobile app project based on the weather app. The UI Kit gives you the necessary screens for creating stunning iOS screens and applying them to any weather app."
          }
          title4={"VIEW PORTFOLIO"}
          image={calling}
        />
        <ContentHome
          title1={"Mobile app, Weather,Software"}
          title2={"Car Dashboard UI Kit Design "}
          title3={
            "Motiv. is a Free Car Dashboard UI Kit Design of 20+ Free pixel-perfect screens and 60+ Components easy to use in Figma. "
          }
          title4={"VIEW PORTFOLIO"}
          image={dashboard}
          type="1"
        />
        <ContentHome
          title1={"Mobile app, Weather,Software"}
          title2={"Video Editing Website - Revise  "}
          title3={
            "Hello Peoples! This is the Video Editing Website landing page design concept. Video editing is an essential part of a tech user."
          }
          title4={"VIEW PORTFOLIO"}
          image={editing}
        />
      </div>
    </div>
  );
};

export default TeamWork;
