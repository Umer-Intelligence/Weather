import { Link } from "react-router-dom";
import "../MainCSS/Weather.css";

const nav4 = () => {
  return (
    <div className="Readme-container">
      <div>
        <Link to="/Current">
          <button className="button">Check Current Weather here </button>
        </Link>
      </div>
      <div>
        <Link to="/">
          <button className="button">Home</button>
        </Link>
      </div>
      <div>
        <Link to="/Forecast">
          <button className="button">Check Forecast Weather here</button>
        </Link>
      </div>
    </div>
  );
};

export default nav4;
