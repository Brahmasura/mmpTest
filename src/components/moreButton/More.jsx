import style from "./more.module.scss";
import more from "../../assets/down-chevron.svg";

const More = ({ backgroundColor, width, height, position, top, right}) => {
  const divStyle = {
    position: position,
    top: top,
    right: right,
    backgroundColor: backgroundColor,
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <>
      <div className={style.moreDiv} style={divStyle}>
        <img src={more} alt="the more button" />
      </div>
    </>
  );
};

export default More;
