import { useState } from "react";
import MenuLeftDiv from "../Components/MenuLeftDiv/MenuLeftDiv";
import style from "./preferences.module.scss";

// the Array begins
const preferenceArray = [
  {
    title: "Design Preferences",
    percentage: "90%",
  },
  {
    title: "Writing Preferences",
    percentage: "15%",
  },
  {
    title: "Web Preferences",
    percentage: "10%",
  },
  {
    title: "Automation Preferences",
    percentage: "30%",
  },
  {
    title: "Video Preferences",
    percentage: "50%",
  },
  {
    title: "MySalesPass Preferences",
    percentage: "70%",
  },
  {
    title: "Power Words",
    percentage: "20%",
  },
];

const Preferences = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  // function to handleActiveDiv
  const handleActiveClick = (index) => {
    setActiveDiv(index);
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.leftDiv}>
        {preferenceArray.map((item, index) => (
          <MenuLeftDiv
            onClick={() => handleActiveClick(index)}
            activeDiv={activeDiv}
            key={index}
            index={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className={style.rightDiv}>
        {activeDiv === 0 && <>first Content</>}
        {activeDiv === 1 && <>second Content</>}
        {activeDiv === 2 && <>third Content</>}
      </div>
    </div>
  );
};

export default Preferences;
