import { useNavigate } from "react-router-dom";
import redArrow from "../../../../assets/Second/redRightArrow.svg";
import thumbsUp from "../../../../assets/Second/thumbsUpIcon.svg";
import style from "./newBrandStepFour.module.scss";

const NewBrandStepFour = () => {
  const navigate = useNavigate();

  // function to handle navigation
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  return (
    <div className={style.mainDiv}>
    <img className={style.thumbsUpIcon} src={thumbsUp} alt="thumbs Up icon" />
      {/* first div begins */}
      <div className={style.firstDiv}>
        <p>Start Building your Brand</p>
        <p>This is the first step to grandness</p>
      </div>
      {/* first div ends */}

      {/* second Div begins */}
      <div className={style.secondDiv}>
        <p>Great work, Ashley W!</p>
        <p>Get ready to immerse yourself deep into this new adventure!</p>
      </div>

      {/* second div ends */}

      {/* third div begins */}
      <div className={style.thirdDiv}>
        <p
          onClick={() => handleNavigation("/brands/newBrand")}
          className={style.thirdLeftPara}
        >
          Go back
        </p>

        <div className={style.thirdRightDiv}>
          <div
            onClick={() => handleNavigation("/")}
            className={style.continueButtonDiv}
          >
            <p>Go to your Dashboard</p>
            <img src={redArrow} alt="the red arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBrandStepFour;
