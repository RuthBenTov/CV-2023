import "./aboutMe.scss";
import { BsPatchCheck } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div className="aboutMeDiv">
      <img className="bgImg" src="https://cdn.pixabay.com/photo/2024/02/15/22/58/technology-8576321_1280.jpg" alt="" />
      <div className="aboutMeDiv1">
        {/* <img className=" lamp" src="/lamp.png" alt="" /> */}
        <h2 className="techSkillHeader">
          Technical Skills
          <BsPatchCheck />
        </h2>
        <div className="skills">
          <div className="flipCard">
            <div className="skillBox">
              <div className="skillHeader">FRONTEND</div>
              <div className="skillVal">
                <h4>Frontend</h4>
                <ul>
                  <li>Java Script</li>
                  <li>React js</li>
                  <li>React Native</li>
                  <li>HTML/css</li>
                  <li>Vanilla</li>
                  <li>MUI/Bootstrap</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flipCard">
            <div className="skillBox">
              <div className="skillHeader">BACKEND</div>
              <div className="skillVal">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js</li>
                  <li>Rest API s</li>
                  <li>JSON</li>
                  <li>SQL</li>
                  <li>NoSQL (mongoDB)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flipCard">
            <div className="skillBox">
              <div className="skillHeader">SKILLS</div>
              <div className="skillVal">
                <h4>Skills</h4>
                <ul>
                  <li>Agile methodology</li>
                  <li>OOP</li>
                  <li>Git</li>
                  <li>Slack</li>
                  <li>Trello</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flipCard">
            <div className="skillBox">
              <div className="skillHeader">LANGUAGE</div>
              <div className="skillVal">
                <h4>Language</h4>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
