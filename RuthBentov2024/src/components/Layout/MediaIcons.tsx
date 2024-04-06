import React, { useEffect } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";

const MediaIcons = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div data-aos="fade-right" className="mediaIcons">
      <IoLogoLinkedin />
      <FaSquareGithub />
      <SiDiscord />
      <FaFacebookSquare />
    </div>
  );
};

export default MediaIcons;
