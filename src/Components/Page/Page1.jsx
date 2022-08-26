import Heading1 from "../Heading/CurrentWeatherHeading.js";
import Otherinfo from "../Info/Otherinfo1.js";
import Nav3 from "../Navbar/Navbar3.js";
import "../MainCSS/Weather.css";
import Nav1 from "../Navbar/Navbar1.js";
import { Link } from "react-router-dom";

const page1 = () => {
  return (
    <div>
      <div className="Readme-container">
        <div>
          <Nav3 />
        </div>
        <div>
          <Link to="/">
            <button className="button">Home</button>
          </Link>
        </div>
        <div>
          <Nav1 />
        </div>
      </div>
      <div align="center" className="heading">
        <Heading1 />
        <Otherinfo />
      </div>
    </div>
  );
};

export default page1;
