import style from "./brandOption.module.scss";
import close from "../../../assets/closeIcon.svg";
import { useLocation, useNavigate } from "react-router-dom";

const BrandOption = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { brandImage, brandName } = location.state || {};

  //   function to handle navigation to routes
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  return (
    <div className={style.brandOptionWrapper}>
      <div className={style.brandOptionContainer}>
        <img src={brandImage} alt="the brand Image" />
        <p>{brandName}</p>
      </div>

      <img
        onClick={() => handleNavigation("/")}
        className={style.closeIcon}
        src={close}
        alt="the close icon"
      />
    </div>
  );
};

export default BrandOption;
