import style from "./brandOption.module.scss";
import close from "../../../assets/closeIcon.svg";
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
import BackAndBrandSelector from "../Components/BackAndBrandSelector/BackAndBrandSelector";

// the brands menu array
const brandsMenuArray = [
  {
    menuLogo: persona,
    menuName: "PERSONA",
    route: "persona",
  },
  {
    menuLogo: design,
    menuName: "DESIGN",
    route: "design",
  },
  {
    menuLogo: tools,
    menuName: "TOOLS",
    route: "tools",
  },
  {
    menuLogo: assets,
    menuName: "ASSESTS",
    route: "assets",
  },
  {
    menuLogo: offers,
    menuName: "OFFERS",
    route: "offers",
  },
  {
    menuLogo: audiences,
    menuName: "AUDIENCES",
    route: "audiences",
  },
  {
    menuLogo: preferences,
    menuName: "PREFERENCES",
    route: "preferences",
  },
  {
    menuLogo: people,
    menuName: "PEOPLE",
    route: "people",
  },
];

const BrandOption = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { brandImage, brandName, level } = location.state || {};

  //   function to handle navigation to routes
  const handleNavigation = (destination, data) => {
    navigate(destination, { state: { index: data } });
  };

  return (
    <div className={style.brandOptionWrapper}>
      <div className={style.brandOptionContainer}>
        <BackAndBrandSelector />

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
            <div
              key={index}
              onClick={() => handleNavigation("manageBrand", { index })}
              className={style.brandMenuDiv}
            >
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
