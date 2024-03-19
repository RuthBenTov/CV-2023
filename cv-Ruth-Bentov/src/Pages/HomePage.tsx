import NavBar from "../components/Navbar/NavBar";
import Header from "../components/Header/Header";
import "./homePage.scss"
import AboutMe from "../components/AboutMe/AboutMe";
const HomePage = () => {
  return (
    <div className="homePageDiv">
      <NavBar />
      <Header />
      <AboutMe/>
    </div>
  );
};

export default HomePage;
