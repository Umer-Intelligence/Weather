import Heading2 from "../Heading/ForecastWeatherHeading.js";
import Otherinfo from "../Info/Otherinfo2.js";
import Nav3 from "../Navbar/Navbar3.js";
import "../MainCSS/Weather.css";
import Nav2 from "../Navbar/Navbar2.js";
import { Link } from "react-router-dom";

const page2 = () => {
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
          <Nav2 />
        </div>
      </div>
      <div align="center" className="heading">
        <Heading2 />
        <Otherinfo />
      </div>
    </div>
  );
};

export default page2;
