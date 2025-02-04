import { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState({
    name: "Kunal Kumar",
    age: "20",
    email: "kunal@yopmail.com",
    interests: ["music"],
    theme: "dark",
  });

  const [err, setError] = useState({});

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        if (!data.name) {
          err.name = "name is not valid";
        }

        if (!data.age) {
          err.age = "age is not valid";
        }

        if (!data.email) {
          err.email = "email should not be blank";
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        if (data.interests.length < 1) {
          err.interests.length = "Please select at least one interest";
        }
        setError(err);
        return !err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  const ActiveTabCompont = tabs[currentTab].component;

  const handlePrev = () => {
    if (tabs[currentTab].validate()) {
      setCurrentTab((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (tabs[currentTab].validate()) {
      setCurrentTab((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <>
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <div
            className="tabs"
            key={index}
            onClick={() => handleTabChange(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <ActiveTabCompont data={data} setData={setData} err={err} />
      {currentTab > 0 && <button onClick={handlePrev}>Prev</button>}
      {currentTab < tabs.length - 1 && (
        <button onClick={handleNext}>Next</button>
      )}
      {currentTab === tabs.length - 1 && (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </>
  );
};

export default Tabs;
