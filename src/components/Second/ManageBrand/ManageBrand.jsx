import style from "./manageBrand.module.scss";
import close from "../../../assets/closeIcon.svg";
import { useNavigate } from "react-router-dom";

const ManageBrand = () => {
  const navigate = useNavigate();

  // function to handle Navigation
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.mainContainer}>ManageBrand</div>

      {/* the close icon */}
      <img
        onClick={() => handleNavigation("/")}
        className={style.closeIcon}
        src={close}
        alt="the close icon"
      />
    </div>
  );
};

export default ManageBrand;
