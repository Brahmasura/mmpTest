import style from "./menuLeftDiv.module.scss";

const MenuLeftDiv = ({ title, percentage, index, activeDiv, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${style.mainDiv} ${
        activeDiv === index && style.mainDivClicked
      }`}
    >
      <p>{title}</p>
      <p>{percentage}</p>
    </div>
  );
};

export default MenuLeftDiv;
