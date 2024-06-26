import { useState } from "react";
import MenuLeftDiv from "../Components/MenuLeftDiv/MenuLeftDiv";
import style from "./persona.module.scss";
import EssentialDetails from "./PersonaRightContent/EssentialDetails/EssentialDetails";

// personaArray for the left div begins
const personaArray = [
  {
    title: "Essential Details",
    percentage: "15%",
  },
  {
    title: "Strategy",
    percentage: "15%",
  },
  {
    title: "Brand History",
    percentage: "15%",
  },
];
// the personaArray ends



const Persona = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  // function to handleActiveDiv
  const handleActiveClick = (index) => {
    setActiveDiv(index);
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.leftDiv}>
        {personaArray.map((item, index) => (
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
        {activeDiv === 0 && <EssentialDetails/>}
        {activeDiv === 1 && <>second Content</>}
        {activeDiv === 2 && <>third Content</>}
      </div>
    </div>
  );
};

export default Persona;
