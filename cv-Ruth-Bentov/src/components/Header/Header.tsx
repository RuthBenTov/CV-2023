import React from "react";
import "./header.scss";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Icons from "../Minis/Icons";

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="rDiv">
        <h2 className="myName">
          {" "}
          Ruth <br /> Bentov .
        </h2>
        <p className="line">____</p>
        <Icons />
        <img
          className="profileImg "
          src="public\7ec4a766-ffd0-4f8e-a2d5-73ca037a0c5b.png"
          alt="ruth"
        />
      </div>

      <div className=" lDiv">
        <p className="onHeaderP">
         backend <span className="line">||</span> frontend
        </p>
        <h2 className="fullStackName"> Full Stack  Engineer</h2>
        <p className="line">______________________________</p>
        <p className="describing">
          Web and applications developer with a year and a half of experience,<br/> proficient in working with both<br/> large and small databases.
        </p>
        <button className="hireMeBtn">Hire Me <IoIosArrowDroprightCircle className="arrowIcon"/></button>
      </div>
    </div>
  );
};

export default Header;
