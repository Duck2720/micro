"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "./ContentHome.scss";

const ContentHome = ({ title1, title2, title3, title4, image, type }: any) => {
  return (
    <div className="GASQOOSELV">
      {type ? (
        <div className="ZRFUTHFFAW">
          <div className="QJUUPZWAZM">
            <span className="IUPOLVOPKC">{title1}</span>
            <span className="EEKYQROENK">{title2}</span>
            <span className="OJCCPFBBDY">{title3}</span>
            <span className="YHQGQNNXSC">{title4}</span>
            <div className="VFRZWSWOBH"></div>
          </div>

          <Image className="NQRAUTLQTV" src={image} alt=""></Image>
        </div>
      ) : (
        <div className="IYGCGYYXZB">
          <Image className="TXEPIFXBGN" src={image} alt=""></Image>
          <div className="FANVJMEFTP">
            <span className="SJXWLXBGQE">{title1}</span>
            <span className="CRXHDVWMHS">{title2}</span>
            <span className="KGVRCSVIKL">{title3}</span>
            <span className="CMAMAZZPDI">{title4}</span>
            <div className="ZWYBLWRDTF">
              <div className="FQVGGOMYXJ"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentHome;
