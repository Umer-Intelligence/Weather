import axios from "axios";
import { useState } from "react";
import "../MainCSS/Weather.css";
import Searchbox from "../Searchbox/Searchbox.js";
import Spinner from "../Spinner/LoadingSpinner.js";

const Heading = ({ value, onKeyPress, onChange }) => {
  const [data, setData] = useState([]);
  const [max, setMax] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str?.[0]?.toUpperCase() + str?.slice(1).toLowerCase();
  };
  const url = `https://goweather.herokuapp.com/weather/%7D${max}`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      setData([]);
      axios
        .get(url)
        .then((response) => {
          if (!response?.data?.temperature) {
            setError("Please try another city.");
          }
          setLoading(false);
          setData(response.data);
          console.log(response.data);
        })
        .catch(
          () =>
            setError("Please try another city.") &
            setData([]) &
            setMax("") &
            setLoading(false)
        );
    }
  };
  return (
    <div>
      <Searchbox
        value={max}
        onKeyPress={searchLocation}
        onChange={(event) => setMax(event.target.value) & setError("")}
      />
      <div align="center" className="container">
        <div className="item">{loading && <Spinner />}</div>
        <div className="item">
          <strong>{capitalizeFirstLetter(max)}</strong>
        </div>
        <div className="item">
          <strong>{error}</strong>
        </div>
      </div>
      <div className="container-1">
        <div className="item-1">
          <strong>Day 1</strong>
        </div>
        <div className="item-1">
          <strong>Day 2</strong>
        </div>
        <div className="item-1">
          <strong>Day 3</strong>
        </div>
      </div>
      <div className="container-1">
        <div className="item-1">{data?.forecast?.[0]?.temperature}</div>
        <div className="item-1">{data?.forecast?.[1]?.temperature}</div>
        <div className="item-1">{data?.forecast?.[2]?.temperature}</div>
      </div>
    </div>
  );
};
// };

export default Heading;
