import style from "./more.module.scss";
import more from "../../assets/down-chevron.svg";
import { useState } from "react";

const More = ({
  backgroundColor,
  text,
  width,
  height,
  position,
  top,
  right,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const divStyle = {
    position: position,
    top: top,
    right: right,
    text: text,
    backgroundColor: backgroundColor,
    width:   `${isHovered ? width * 3 : width}vh`,
    height: `${height}vh`,
  };

  return (
    <>
      <div className={style.moreDiv} style={divStyle}
      onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div className={style.contentDiv}>
          <p className={`${isHovered ? style.hoveredP : style.unHoveredP}`}>
            {text}
          </p>
          <img src={more} alt="the more button" />
        </div>
      </div>
    </>
  );
};

export default More;
