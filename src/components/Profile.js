const Profile = ({ data, setData, err }) => {
  const { name, age, email } = data;

  const handleOnChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="tab-container">
      <div className="input-text">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          onChange={(e) => handleOnChange(e, "name")}
          value={name}
        />
        {err?.name && <span className="err"> {err.name}</span>}
      </div>
      <div className="input-text">
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          onChange={(e) => handleOnChange(e, "age")}
          value={age}
        />
        {err?.age && <span className="err"> {err.age}</span>}
      </div>
      <div className="input-text">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          onChange={(e) => handleOnChange(e, "email")}
          value={email}
        />
        {err?.email && <span className="err"> {err.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
