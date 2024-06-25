import { useState } from "react";
import style from "./assets.module.scss";
import MenuLeftDiv from "../Components/MenuLeftDiv/MenuLeftDiv";

// the Array begins
const assetsArray = [
  {
    title: "Foundation",
    percentage: "90%",
  },
  {
    title: "Outreach",
    percentage: "15%",
  },
  {
    title: "Mass Media",
    percentage: "10%",
  },
  {
    title: "Multimedia Assets",
    percentage: "30%",
  },
  {
    title: "Social Proofs",
    percentage: "50%",
  },
];

const Assets = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  // function to handleActiveDiv
  const handleActiveClick = (index) => {
    setActiveDiv(index);
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.leftDiv}>
        {assetsArray.map((item, index) => (
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

export default Assets;
