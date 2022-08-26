import { Link } from "react-router-dom";
import "../MainCSS/Weather.css";

const nav3 = () => {
  return (
    <div className="Link">
      <Link to="/Readme">
        <button className="button">Read me</button>
      </Link>
    </div>
  );
};

export default nav3;
