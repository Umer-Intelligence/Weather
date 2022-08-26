import "./MainPage.css";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="Main">
      <div className="Main-Heading">Weather Report</div>
      <div>Get real-time information about Weather</div>
      <div>
        <Link to="/Current">
          <button className="Main-button">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
