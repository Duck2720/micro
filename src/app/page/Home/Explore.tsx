import React from "react";
import okPink from "../../assets/images/okPink.png";
import Image from "next/image";
import "./Explore.scss";
import ExploreContent from "../Common/ExploreContent";
import TittleHome from "../Common/TittleHome";
const Explore = () => {
  return (
    <div className="OAYQADLDIP" data-aos="fade-up">
      <div className="XIWFTQQCMD">
        <div className="OXNHKWGQNH">
          <div className="ZHSMFPNGTQ">
            <TittleHome
              titleBlack={"Explore our core"}
              titleBlue={"Expertise"}
            />
            <div className="PTJPQYXTKT">
              <span>
                We produce beautiful and engaging websites. Our team is mostly
                experienced in the design of stunning interfaces, e-commerce and
                marketing website development, ready to work with you on your
                project!
              </span>
            </div>
          </div>
          <div className="KIIVMOBHAG">
            <ExploreContent
              title={"UI/UX Design"}
              type={"pink"}
              contents={[
                "High-quality motion design",
                "Thoughtful user experience design",
                "Unique user interface design for websites and apps",
                "Design concepts & strategies for MVPs",
              ]}
            />
            <ExploreContent
              title={"Webflow Design"}
              type={"yellow"}
              contents={[
                "High-quality motion design",
                "Thoughtful user experience design",
                "Unique user interface design for websites and apps",
                "Design concepts & strategies for MVPs",
              ]}
            />
            <ExploreContent
              title={"Webflow Developer"}
              type={"blue"}
              contents={[
                "Full-cycle development of powerful corporate websites and one-pagers",
                "Webflow integrations with third-party services and apps",
                "Migration of your designs or even ready website to Webflow CMS",
              ]}
            />
            <ExploreContent
              title={"Shopify Developer"}
              type={"purple"}
              contents={[
                "Cost-effective e-commerce development",
                "Reinvention of your online store with a strong tech stack",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
