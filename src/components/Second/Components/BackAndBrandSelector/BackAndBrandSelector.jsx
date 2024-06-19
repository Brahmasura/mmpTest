import { useNavigate } from "react-router-dom";
import style from "./backAndBrandSelector.module.scss";
import backArrow from "../../../../assets/Second/greyBackArrow.svg";
import downArrow from "../../../../assets/downArrowTwo.svg";
import star from "../../../../assets/yellowStar.svg";
import unselectedStar from "../../../../assets/greyStar.svg";
import { useState } from "react";

// the ProjectBrandsArray
const ProjectBrandsArray = [
  {
    brand: "SpaceX",
  },
  {
    brand: "SmartFit",
  },
  {
    brand: "A Roof For You",
  },
];

const BackAndBrandSelector = () => {
  const navigate = useNavigate();
  const [projectBrandToggle, setProjectBrandToggle] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(0);

  //   function to handle navigation to routes
  const handleNavigation = (destination, data) => {
    navigate(destination, { state: { index: data } });
  };

  // function to select the brand select from the toggler
  const handleBrandselect = (index) => {
    setSelectedBrand(index);
  };

  // function  to set state according to the brand toggle
  const handleProjectBrandToggle = () => {
    setProjectBrandToggle(!projectBrandToggle);
  };
  // the brand is woking fine for now but what we want is that we will make it a component
  // for reuse

  return (
    <>
      {/* this is div that is going to be on the top */}
      <div className={style.backAndBrandSelectorContainer}>
        {/* this is going to be on the left side */}
        <div
          onClick={() => handleNavigation("/brands")}
          className={style.myBrandsDiv}
        >
          <img src={backArrow} alt="the grey back arrow" />
          <p>My Brands</p>
        </div>

        {/* brand toggle begins */}
        <div
          onClick={handleProjectBrandToggle}
          className={style.brandsTogglerContainer}
        >
          <div className={style.brandsToggler}>
            <img
              className={style.star}
              src={star}
              alt="the active brand start"
            />
            <p>{ProjectBrandsArray[selectedBrand].brand}</p>
            <img
              className={projectBrandToggle ? style.upArrow : style.downArrow}
              src={downArrow}
              alt="the down arrow"
            />
          </div>

          {projectBrandToggle && (
            <div className={style.brandsToggleDiv}>
              {ProjectBrandsArray.map((brand, index) => (
                <div
                  onClick={() => handleBrandselect(index)}
                  key={index}
                  className={` ${style.starBrandDiv} ${
                    selectedBrand === index ? style.starBrandDivSelected : " "
                  }`}
                >
                  <img
                    src={selectedBrand === index ? star : unselectedStar}
                    alt="the star"
                  />
                  <p>{brand.brand}</p>
                </div>
              ))}

              <button>+ Create a Brand</button>
            </div>
          )}
        </div>
        {/* brand toggler div ends */}
      </div>
      {/* the top div ends */}
    </>
  );
};

export default BackAndBrandSelector;
