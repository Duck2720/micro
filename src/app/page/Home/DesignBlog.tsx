import React from "react";
import "./DesignBlog.scss";
import TittleHome from "../Common/TittleHome";
import DesignContent from "../Common/DesignContent";
import image1 from "../../assets/images/designBlog/1.png";
import image2 from "../../assets/images/designBlog/2.png";
import image3 from "../../assets/images/designBlog/3.png";

const DesignBlog = () => {
  return (
    <div className="JYTQDTUENX" data-aos="fade-up">
      <div className="KTSBRHDEQP">
        <div className="DNOBILKTHN">
          <TittleHome titleBlack={"OUR Design"} titleBlue={"BLOG"} />
          <div className="PMBGEWBDPH">
            <DesignContent
              image={image1}
              time={"Jul 12, 2022"}
              content={
                "15 Important Usability Principles for User Interface Design"
              }
              title={"Design Blog"}
            />
            <DesignContent
              image={image2}
              time={"Jul 30, 2022"}
              content={
                "15 Important Usability Principles for User Interface Design"
              }
              title={"Design Blog"}
            />
            <DesignContent
              image={image3}
              time={"Jul 22, 2022"}
              content={
                "15 Important Usability Principles for User Interface Design"
              }
              title={"Design Blog"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignBlog;
