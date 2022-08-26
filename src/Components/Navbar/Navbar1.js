import { Link } from "react-router-dom";
import "../MainCSS/Weather.css";

const nav1 = () => {
  return (
    <div className="Link">
      <Link to="/Forecast">
        <button className="button">Check Forecast Weather here</button>
      </Link>
    </div>
  );
};

export default nav1;
