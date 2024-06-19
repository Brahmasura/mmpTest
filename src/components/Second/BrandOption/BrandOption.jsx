import style from "./brandOption.module.scss";
import close from "../../../assets/closeIcon.svg";
import backArrow from "../../../assets/Second/greyBackArrow.svg";
import downArrow from "../../../assets/downArrowTwo.svg";
import star from "../../../assets/yellowStar.svg";
import unselectedStar from "../../../assets/greyStar.svg";
import persona from "../../../assets/Second/personaLogo.svg";
import design from "../../../assets/Second/designLogo.svg";
import tools from "../../../assets/Second/toolsLogo.svg";
import assets from "../../../assets/Second/assestsLogo.svg";
import offers from "../../../assets/Second/offersLogo.svg";
import audiences from "../../../assets/Second/audiencesLogo.svg";
import preferences from "../../../assets/Second/preferencesLogo.svg";
import people from "../../../assets/Second/peopleLogo.svg";
import map from "../../../assets/map2.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

// the brands menu array
const brandsMenuArray = [
  {
    menuLogo: persona,
    menuName: "PERSONA",
  },
  {
    menuLogo: design,
    menuName: "DESIGN",
  },
  {
    menuLogo: tools,
    menuName: "TOOLS",
  },
  {
    menuLogo: assets,
    menuName: "ASSESTS",
  },
  {
    menuLogo: offers,
    menuName: "OFFERS",
  },
  {
    menuLogo: audiences,
    menuName: "AUDIENCES",
  },
  {
    menuLogo: preferences,
    menuName: "PREFERENCES",
  },
  {
    menuLogo: people,
    menuName: "PEOPLE",
  },
];

// project brand array begins, now we are using the same one just like the projectMain one we will make it
// another component leater
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

const BrandOption = () => {
  const [projectBrandToggle, setProjectBrandToggle] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { brandImage, brandName, level } = location.state || {};

  //   function to handle navigation to routes
  const handleNavigation = (destination) => {
    navigate(destination);
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
    <div className={style.brandOptionWrapper}>
      <div className={style.brandOptionContainer}>
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

        {/* the brand details div begins  */}
        <div className={style.brandDetailDiv}>
          {/* left div */}
          <div className={style.leftDetailDiv}>
            {/* first div brand name */}
            <div className={style.brandNameDiv}>
              <p>BRAND:</p>
              <p>{brandName}</p>
            </div>

            {/* second div brand logo begins */}

            <div className={style.brandLogoDiv}>
              <img src={brandImage} alt="the brand logo" />
            </div>
            {/* second div brand logo ends */}

            {/* third div founded begins  */}
            <div className={style.lowerDetailsDiv}>
              <p>FOUNDED:</p>
              <p>7th July, 2023</p>
            </div>
            {/* third div ends */}

            {/* fourth div Projects begins  */}
            <div className={style.lowerDetailsDiv}>
              <p>Active Projects:</p>
              <p>2</p>
            </div>
            {/* fourth div ends */}

            {/* fifth div tickets begins  */}
            <div className={style.lowerDetailsDiv}>
              <p>Active Tickets:</p>
              <p>7</p>
            </div>
            {/* fifth div ends */}
          </div>
          {/* left div ends */}

          {/* right detail div begins */}
          <div className={style.rightDetailDiv}>
            <p>
              LvL<span>{level}</span>
            </p>
            <p>
              Your brand profile <br /> is almost complete!
            </p>
          </div>

          {/* right detail div ends */}
        </div>
        {/* the brand details div ends */}

        {/* brands menu div begins */}
        <div className={style.brandsMenuContainer}>
          {brandsMenuArray.map((item, index) => (
            <div key={index} onClick={() => handleNavigation(`/brands/manageBrand`)} className={style.brandMenuDiv}>
            {/* this needs to be rectifies */}
              <img src={item.menuLogo} alt="the menu logo" />

              <div className={style.menuNameAndStatusDiv}>
                <p>{item.menuName}</p>
                <div className={style.statusContainer}>
                  <div className={style.status}></div>
                </div>
              </div>
            </div>
          ))}

          {/* map text div begins */}
          <div className={style.mapTextDiv}>
            <img src={map} alt="the map logo" />
            <p>
              Explore Your <br /> MyMarketingMap
            </p>
          </div>

          {/* map text div ends
           */}
        </div>

        {/* brands menu div ends */}
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
