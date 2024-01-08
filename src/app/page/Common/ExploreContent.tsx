import React from "react";
import okPurple from "../../assets/images/okPurple.png";
import okPink from "../../assets/images/okPink.png";
import okBlue from "../../assets/images/okBlue.png";
import okYellow from "../../assets/images/okYellow.png";
import Image from "next/image";
import "./ExploreContent.scss";
const ExploreContent = ({ title, contents, type }: any) => {
  const getImages: any = () => {
    switch (type) {
      case "pink":
        return okPink;
      case "purple":
        return okPurple;
      case "blue":
        return okBlue;
      case "yellow":
        return okYellow;
      default:
        return null;
    }
  };
  return (
    <div className="ZBEIQJHQKF">
      <div className="NWFBPXECFS">
        <div className="NNULERQWUU">
          <div className="ZIVLEQZGLD">
            <span className="IEKDTTHJDN">{title}</span>
          </div>
          <div className="PRBUPWMHOK"></div>
          <div className="YMQJSIVWUH">
            {type && (
              <>
                {contents.map((content: any) => (
                  <>
                    <div className="PHUYNQDTYF">
                      <Image src={getImages()} alt=""></Image>
                      <span className="OPAFAIIIFY">{content}</span>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreContent;
