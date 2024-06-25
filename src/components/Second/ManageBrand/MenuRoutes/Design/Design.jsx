import { useState } from "react";
import style from "./design.module.scss";
import MenuLeftDiv from "../Components/MenuLeftDiv/MenuLeftDiv";

// the designArray begins
const designArray = [
  {
    title: "Official Logos",
    percentage: "90%",
  },
  {
    title: "fonts",
    percentage: "15%",
  },
  {
    title: "Colors",
    percentage: "10%",
  },
  {
    title: "Brand Elements",
    percentage: "30%",
  },
  {
    title: "Brand Photos",
    percentage: "50%",
  },
  {
    title: "Blog Graphics",
    percentage: "70%",
  },
  {
    title: "Icons",
    percentage: "20%",
  },
  {
    title: "Favicons",
    percentage: "40%",
  },
  {
    title: "Stock Assets",
    percentage: "30%",
  },
  {
    title: "Social Graphics",
    percentage: "60%",
  },
];

const Design = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  // function to handleActiveDiv
  const handleActiveClick = (index) => {
    setActiveDiv(index);
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.leftDiv}>
        {designArray.map((item, index) => (
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

export default Design;
