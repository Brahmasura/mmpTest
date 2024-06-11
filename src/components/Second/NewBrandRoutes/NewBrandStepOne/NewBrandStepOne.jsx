import { useNavigate } from "react-router-dom";
import downArrow from "../../../../assets/downArrowTwo.svg";
import rightArrow from "../../../../assets/Second/newBrandStepOneRigthArrow.svg";
import style from "./newBrandStepOne.module.scss";

const NewBrandStepOne = () => {
  const navigate = useNavigate();

  const handleNavigation = (destination) => {
    navigate(destination);
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.contentDiv}>
        {/* first div */}
        <div className={style.firstDiv}>
          <p>Start Building your Brand</p>
          <p>It takes only 3+ minutes</p>
        </div>

        {/* second div */}
        <div className={style.secondDiv}>
          <p>New Brand</p>
          <img src={downArrow} alt="the down Arrow" />
        </div>

        {/* third div */}
        <div className={style.thirdDiv}>
          <p>Create a New Brand</p>
          <img
            onClick={() => handleNavigation("addBrandName")}
            src={rightArrow}
            alt="the right arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default NewBrandStepOne;
