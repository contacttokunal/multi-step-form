const Interests = ({ data, setData, err }) => {
  const { interests } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: [...interests, e.target.value],
    }));
  };

  return (
    <div className="tab-container">
      <div>
        <input
          type="checkbox"
          value="javascipt"
          checked={interests.includes("javascipt")}
          onChange={handleDataChange}
        />
        <label> Javascipt</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="coding"
          checked={interests.includes("coding")}
          onChange={handleDataChange}
        />
        <label> Coding</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="movie"
          checked={interests.includes("movie")}
          onChange={handleDataChange}
        />
        <label> Movie</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="music"
          checked={interests.includes("music")}
          onChange={handleDataChange}
        />
        <label> Music</label>
      </div>
      {err.interests && <span className="err"> {err.interests}</span>}
    </div>
  );
};

export default Interests;
