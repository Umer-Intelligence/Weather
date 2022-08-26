import "./Searchbox.css";

const Searchbox = ({ value, onChange, onKeyPress }) => {
  return (
    <div className="Search">
      <input
        type="text"
        value={value}
        onKeyPress={onKeyPress}
        onChange={onChange}
        placeholder="Enter Location"
      />
    </div>
  );
};

export default Searchbox;
