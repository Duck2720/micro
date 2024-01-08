"use client";
import React from "react";
import "./MenuHeader.scss";
import close from "../../../assets/images/leftIcon.png";
import Image from "next/image";

const MenuHeader = ({ show, setShow }: any) => {
  console.log(show);
  return (
    <div className={`PSHLUOJDJQ ${show ? "SFFQXDVOKO" : null}`}>
      <Image
        onClick={() => setShow(!show)}
        className="GONCAGQEOX"
        src={close}
        alt={""}
      ></Image>
      <div className="WZRWEKWQVD">
        <ul data-aos="fade-left">
          <li>Home</li>
        </ul>
        <ul data-aos="fade-left">
          <li>Services</li>
        </ul>
        <ul data-aos="fade-left">
          <li>Expertise</li>
        </ul>
        <ul data-aos="fade-left">
          <li>Cases</li>
        </ul>
        <ul data-aos="fade-left">
          <li>Pricing</li>
        </ul>
        <ul data-aos="fade-left">
          <li>Company</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuHeader;
