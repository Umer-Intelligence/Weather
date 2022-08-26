import { Link } from "react-router-dom";
import "../MainCSS/Weather.css";

const nav2 = () => {
  return (
    <div className="Link">
      <Link to="/">
        <button className="button">Check Current Weather here </button>
      </Link>
    </div>
  );
};

export default nav2;
