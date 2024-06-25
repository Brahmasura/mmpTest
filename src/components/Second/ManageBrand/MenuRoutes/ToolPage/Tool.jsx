import { useState } from "react";
import MenuLeftDiv from "../Components/MenuLeftDiv/MenuLeftDiv";
import style from "./tool.module.scss";

// the Array begins
const toolArray = [
  {
    title: "Website and Pages",
    percentage: "90%",
  },
  {
    title: "Ecommerce Platforms",
    percentage: "15%",
  },
  {
    title: "CRMs",
    percentage: "10%",
  },
  {
    title: "Forms",
    percentage: "30%",
  },
  {
    title: "Phone Systems",
    percentage: "50%",
  },
  {
    title: "Virtual Meeting Rooms",
    percentage: "70%",
  },
  {
    title: "Membership/ Learning Portals",
    percentage: "20%",
  },
  {
    title: "Social Platforms",
    percentage: "40%",
  },
  {
    title: "Video Channels",
    percentage: "30%",
  },
  {
    title: "Affiliate Programs",
    percentage: "60%",
  },
  {
    title: "Review Portals",
    percentage: "80%",
  },
];

const Tool = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  // function to handleActiveDiv
  const handleActiveClick = (index) => {
    setActiveDiv(index);
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.leftDiv}>
        {toolArray.map((item, index) => (
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

export default Tool;
