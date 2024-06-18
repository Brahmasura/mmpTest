import style from "./newBrandStepTwo.module.scss";
import bolt from "../../../../assets/Second/boltIcon.svg";
import yellowBolt from "../../../../assets/Second/yellowBoltIcon.svg";
import redArrow from "../../../../assets/Second/redRightArrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBrandStepTwo = () => {
  const navigate = useNavigate();
  const [firstRightDivClicked, setFirstRightDivClicked] = useState(0);
  const [firstRightDivHovered, setFirstRightDivHovered] = useState(null);

  // function to handle the first right div click
  const handleFirstRightDivClick = (index) => {
    setFirstRightDivClicked(index);
  };

  // function to handle the fist right div hover
  const handleFirstRightDivHovered = (index) => {
    setFirstRightDivHovered(index);
  };

  // function to handle navigatin
  const handleNavigation = (index) => {
    navigate(index);
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.firstDiv}>
        <div className={style.firstLeftDiv}>
          <p>Start Building your Brand</p>
          <p>This is the first step to grandness</p>
        </div>

        <div className={style.firstRightDiv}>
          {/* quickstartcontainer begins */}
          <div className={style.quickstartContainer}>
            <div
              onClick={() => handleFirstRightDivClick(0)}
              onMouseEnter={() => handleFirstRightDivHovered(0)}
              onMouseLeave={() => handleFirstRightDivHovered(null)}
              className={`${style.quickstartDiv} ${
                firstRightDivClicked === 0 && style.quickstartDivClicked
              }`}
            >
              <img
                src={firstRightDivClicked === 0 ? yellowBolt : bolt}
                alt="the bolt icon"
              />
              <p>QuickStart</p>
            </div>

            <p
              className={`${style.detailParaDefault} ${
                firstRightDivHovered === 0 && style.detailParaVisible
              }`}
            >
              Rapidly establishes brand identity <br /> for immediate market
              impact
            </p>
          </div>
          {/* quickstartcontainer ends */}

          {/* complete container begins */}
          <div className={style.completeContainer}>
            <div
              onClick={() => handleFirstRightDivClick(1)}
              onMouseEnter={() => handleFirstRightDivHovered(1)}
              onMouseLeave={() => handleFirstRightDivHovered(null)}
              className={`${style.completeDiv} ${
                firstRightDivClicked === 1 && style.completeDivClicked
              }`}
            >
              <p>Complete</p>
            </div>

            <p
              className={`${style.detailParaDefault} ${
                firstRightDivHovered === 1 && style.detailParaVisible
              }`}
            >
              Rapidly establishes brand identity <br /> for immediate market
              impact
            </p>
          </div>

          {/* complete container ends */}
        </div>
      </div>
      {/* first div ends */}

      {/* bottom div begins */}
      <div className={style.bottomDiv}>
        {/* second div input begins */}
        <div className={style.secondDiv}>
          <p>Your Brand's Name*</p>
          <input type="text" />
        </div>
        {/* second div input ends */}

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
              onClick={() => handleNavigation("/brands/newBrand/addBrandLogo")}
              className={style.continueButtonDiv}
            >
              <p>Continue</p>
              <img src={redArrow} alt="the red arrow" />
            </div>
          </div>
        </div>

        {/* third div ends */}
      </div>
      {/* bottom div ends */}
    </div>
  );
};

export default NewBrandStepTwo;
