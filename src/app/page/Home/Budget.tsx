import React from "react";
import "./Budget.scss";
import TittleHome from "../Common/TittleHome";
import Image from "next/image";
import okPurple from "../../assets/images/okPurple.png";

const Budget = () => {
  const contents1 = [
    "UI/UX Designer",
    "Dedicated Developer",
    "QA technician",
    "Project Manager",
    "On time Support",
  ];
  const contents2 = ["UI/UX Designer", "Dedicated Developer", "QA technician"];
  return (
    <div className="PMCVGORUQI">
      <div className="ULHZIWBXND">
        <div className="ZXJCBEMAFE">
          <div className="QRJATQLULI">
            <div className="NNYNXEVEAD">
              <TittleHome
                titleBlack={"Find the plan that fits your"}
                titleBlue={"budget"}
              />
              <div className="USBZLFFFCH">
                <button className="ENHGLCFDEY">Monthly</button>
                <button>Yearly</button>
              </div>
            </div>
          </div>
          <div className="IWYEKLELGM">
            <div className="ZHEJDDFOMD">
              <div className="IXJSWRBKRZ">
                <div className="FRTKHPBOIV">
                  <span>Pro</span>
                  <button>Most popular</button>
                </div>
                <div className="FVQBABUKZI">
                  <span>$35</span>/Per Month
                </div>
              </div>
              <div className="NFBPLJARQI">
                <div className="YHQRPBZXCT">
                  {contents1.map((content1) => (
                    <div key={""} className="LTNROSTJRU">
                      <Image src={okPurple} alt={""}></Image>
                      <span>{content1}</span>
                    </div>
                  ))}
                </div>
                <div className="GEMYYHCDIV">
                  <button>Buy now</button>
                </div>
              </div>
            </div>
            <div className="RKPYHMKBHK">
              <div className="IBIWOMZXYF">
                <div className="WMKCOYQXCR">
                  <span>Pro</span>
                  <button>Free</button>
                </div>
                <div className="UREAXPABIZ">
                  <span>$0</span>
                </div>
              </div>
              <div className="FMFSJNLZVA">
                <div className="SUMSVJITMF">
                  {contents2.map((content2) => (
                    <div key={""} className="VCJGCCXFVH">
                      <Image src={okPurple} alt={""}></Image>
                      <span>{content2}</span>
                    </div>
                  ))}
                </div>
                <div className="TMOZMQIHFN">
                  <button>Buy now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
