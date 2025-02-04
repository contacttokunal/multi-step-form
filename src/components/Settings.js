const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.value,
    }));
  };

  return (
    <div className="tab-container">
      <input
        type="radio"
        name="theme"
        value="dark"
        checked={theme === "dark" ? true : false}
        onChange={handleDataChange}
      />
      <span> Dark Theme</span>
      <input
        type="radio"
        name="theme"
        value="light"
        checked={theme === "light" ? true : false}
        onChange={handleDataChange}
      />
      <span> Light Theme</span>
    </div>
  );
};

export default Settings;
