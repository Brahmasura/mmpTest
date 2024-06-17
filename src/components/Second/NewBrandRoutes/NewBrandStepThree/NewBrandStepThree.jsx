import { useState } from "react";
import style from "./newBrandStepThree.module.scss";
import playIcon from "../../../../assets/Second/playIcon.svg";
import redArrow from "../../../../assets/Second/redRightArrow.svg";
import logoUploadIcon from "../../../../assets/Second/logoUploadIcon.svg";
import { useNavigate } from "react-router-dom";

const NewBrandStepThree = () => {
  const navigate = useNavigate();
  const [yesClicked, setYesClicked] = useState(false);
  const [booleanToggle, setBooleanToggle] = useState(null);

  // function to handle boolean toggle
  const handleBooleanToggle = (index) => {
    setBooleanToggle(index);
  };

  // function to handle the toggle
  const handleYesToggle = () => {
    setYesClicked(!yesClicked);
  };

  // function to handle navigation
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  return (
    <div className={style.mainDiv}>
      <div
        className={`${style.leftDivDefault} ${
          yesClicked && style.leftDivClicked
        }`}
      >
        <div
          className={`${style.leftFirstDiv} ${
            yesClicked && style.leftFirstDivToggled
          }`}
        >
          <p>Start Building your Brand</p>
          <p>This is the first step to grandness</p>
        </div>
        {/* left first div ends */}

        <div className={style.leftSecondDiv}>
          <p>Do you have a Logo?</p>
          <p>
            If yes, upload it in any format you have it (JPG, PNG, PDF, SVG). If
            not,
            {yesClicked && (
              <>
                <br />
              </>
            )}{" "}
            don’t worry! We’ll take care of that later.
          </p>
        </div>
        {/* left second div ends */}

        {/* left third div begins */}
        <div className={style.leftThirdDiv}>
          {/* yes no div begins */}
          <div className={style.yesNoDiv}>
            <div
              onClick={() => {
                handleBooleanToggle(1);
                handleYesToggle();
              }}
              className={`${style.yesDiv} ${
                booleanToggle === 1 && style.yesNoDivClicked
              }`}
            >
              <p>YES</p>
            </div>
            <div
              onClick={() => handleBooleanToggle(2)}
              className={`${style.noDiv} ${
                booleanToggle === 2 && style.yesNoDivClicked
              }`}
            >
              <p>NO</p>
            </div>
          </div>
          {/* yes no div ends */}

          {yesClicked && (
            <>
              {/* logo upload div begins */}
              <div className={style.logoUploadDiv}>
                <img src={logoUploadIcon} alt="logo upload icon" />
                <p>UPLOAD A NEW FILE</p>
              </div>

              {/* logo upload div ends */}
            </>
          )}
        </div>
        {/* left third div ends */}

        {/* third div begins */}
        <div className={`${style.leftFourthDiv} ${yesClicked && style.leftFourthDivToggled}`}>
          <p
            onClick={() => handleNavigation("/brands/newBrand")}
            className={style.thirdLeftPara}
          >
            Go back
          </p>

          <div className={style.thirdRightDiv}>
            <div
              onClick={() => handleNavigation("/brands/newBrand/newBrandFinal")}
              className={style.continueButtonDiv}
            >
              <p>Continue</p>
              <img src={redArrow} alt="the red arrow" />
            </div>
          </div>
        </div>

        {/* third div ends */}
      </div>

      {yesClicked && (
        <>
          <div className={style.rightDiv}>
            <p className={style.infoPara}>INFO</p>

            <div className={style.whatisLogoDiv}>
              <p>What is a Logo</p>
              <p>
                A logo is a visual symbol that represents your brand's identity.
                It's the face of your business, instantly recognizable, and
                communicates your values and personality.
              </p>
            </div>
            {/* logo div ends */}

            {/* list div betgins */}
            <div className={style.redDiv}>
              <p>Uploading Your Logo</p>
            </div>

            <ol>
              <li>
                Get Started :{" "}
                <span>
                  Ready to showcase your brand? Click the "upload" button to add
                  your logo
                </span>
              </li>
              <li>
                File Format :{" "}
                <span>
                  Ensure your logo is in a common format like JPEG, PNG, or SVG
                  for compatibility
                </span>
              </li>
              <li>
                Size Matters :{" "}
                <span>
                  Make sure your logo fits within the specified dimensions
                  without distortion.
                </span>
              </li>
              <li>
                Resolution :{" "}
                <span>
                  For digital use, aim for a high-resolution logo to maintain
                  quality.
                </span>
              </li>
              <li>
                Feedback:{" "}
                <span>
                  Need help or have questions? Reach out to our support team for
                  assistance.
                </span>
              </li>
            </ol>

            {/* list div ends */}

            {/* play div begins  */}
            <div className={style.playDiv}>
              <img src={playIcon} alt="the play icon" />
            </div>

            {/* play div ends */}
          </div>
        </>
      )}
    </div>
  );
};

export default NewBrandStepThree;
