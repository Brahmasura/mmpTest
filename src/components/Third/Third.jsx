import { useContext } from "react";
import Project from "../Projects/Project";
import Title from "../Title/Title";
import style from "./third.module.scss";
import { ContainerContext } from "../../Cotntext/ContainerContext";

const projectArray = [
  {
    fraction: "4/7",
    title: "SpaceX Website Pages",
    text: "75% completed",
    color: "#FF7F00",
  },
  {
    fraction: "2/7",
    title: "Visual Branding",
    text: "15% completed",
    color: "#FFD700",
  },

  {
    fraction: "4/7",
    title: "SpaceX Website Pages",
    text: "75% completed",
    color: "orange",
  },
  {
    fraction: "2/7",
    title: "Visual Branding",
    text: "15% completed",
    color: "yellow",
  },
  
];

const Third = () => {
  const {handleContainerClick} = useContext(ContainerContext);
  return (
    <>
      <div className={style.mainDiv}>
        {/* title */}
        <Title text="MyProjects" handleContainerClick={() => handleContainerClick(3)} />

        {/* content */}

        <div className={style.projectContainer}>
          {projectArray.map((item, index) => (
            <Project
              key={index}
              title={item.title}
              text={item.text}
              fraction={item.fraction}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Third;
