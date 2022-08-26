import axios from "axios";
import { useState } from "react";
import "../MainCSS/Weather.css";
import Searchbox from "../Searchbox/Searchbox.js";
import Spinner from "../Spinner/LoadingSpinner.js";

const Heading = ({ value, onKeyPress, onChange }) => {
  const [data, setData] = useState([]);
  const [max, setMax] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str?.[0]?.toUpperCase() + str?.slice(1).toLowerCase();
  };
  const url = `https://goweather.herokuapp.com/weather/%7D${max}`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          if (!response?.data?.temperature) {
            console.log("in if");
            setError("Please try another city.");
          }
          setLoading(false);
          setData(response.data);
          console.log(response.data);
          setError("");
        })
        .catch(
          () => setError("Please try another city.") & setData([]) & setMax("")
        );
    }
  };
  return (
    <div>
      <Searchbox
        value={max}
        onKeyPress={searchLocation}
        onChange={(event) => setMax(event.target.value) & setError([])}
      />

      <div align="center" className="container">
        <div className="item">
          <strong>{loading && <Spinner />}</strong>
        </div>
        <div className="item">
          <strong>{capitalizeFirstLetter(max)}</strong>
        </div>
        <div className="item">
          <strong>{error}</strong>
        </div>
        <div className="item">{data?.temperature}</div>
      </div>
      <div className="container-1">
        <div className="item">
          <strong>Condition</strong>
        </div>
        <div className="item">
          <strong>Wind</strong>
        </div>
        <div className="item">
          <strong>Feels like</strong>
        </div>
      </div>
      <div className="container-1">
        <div className="item-1">{data?.description?.substring(0, 15)}</div>
        <div className="item-1">{data?.wind}</div>
        <div className="item-1">{data?.temperature}</div>
      </div>
    </div>
  );
};
// };

export default Heading;
