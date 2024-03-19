import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { SiDiscord } from "react-icons/si";

import "./icons.scss";

const Icons = () => {
  return (
    <div className="icons">
      <FaLinkedinIn className="icon" href="#" />
      <IoLogoGithub className="icon" href="#" />
      <SiDiscord className="icon" href="#" />
    </div>
  );
};

export default Icons;
