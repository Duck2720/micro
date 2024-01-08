import React from "react";
import Image from "next/image";
import "./DesignContent.scss";

const DesignContent = ({ image, time, content, title }: any) => {
  return (
    <div className="XKZSXZOXQF">
      <Image className="DIRDOCTPEK" src={image} alt={""}></Image>
      <div className="MYPGAEUQNM">
        <div className="MTBGFHWLJQ">{title}</div>
        <span>{time}</span>
      </div>
      <span className="ZOOAGAAVRF">{content}</span>
    </div>
  );
};

export default DesignContent;
