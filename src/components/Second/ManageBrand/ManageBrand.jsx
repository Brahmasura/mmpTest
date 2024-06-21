import style from "./manageBrand.module.scss";
import close from "../../../assets/closeIcon.svg";

import persona from "../../../assets/Second/personaLogo.svg";
import design from "../../../assets/Second/designLogo.svg";
import tools from "../../../assets/Second/toolsLogo.svg";
import assets from "../../../assets/Second/assestsLogo.svg";
import offers from "../../../assets/Second/offersLogo.svg";
import audiences from "../../../assets/Second/audiencesLogo.svg";
import preferences from "../../../assets/Second/preferencesLogo.svg";
import people from "../../../assets/Second/peopleLogo.svg";

import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import BackAndBrandSelector from "../Components/BackAndBrandSelector/BackAndBrandSelector";
import Persona from "./MenuRoutes/Persona/Persona";

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

const ManageBrand = () => {
  // the above state is only for testing
  const navigate = useNavigate();
  const location = useLocation();
  const { index } = location.state || {};

  console.log("the index no:", index);

  const [activeOption, setActiveOption] = useState(index.index);

  // this function is to set active state
  const handleActive = (term) => {
    setActiveOption(term);
  };

  // function to handle Navigation
  const handleNavigation = (destination) => {
    navigate(destination);
  };

  return (
    <div className={style.wrapper}>
      {/* main container begins */}
      <div className={style.mainContainer}>
        <BackAndBrandSelector />

        {/* menu div begins */}
        <div className={style.menuContainer}>
          {brandsMenuArray.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                handleActive(index);
              }}
              className={`${style.menuDiv} ${
                activeOption === index && style.menuDivClicked
              }`}
            >
              <img src={item.menuLogo} alt="the menu logo" />

              {activeOption === index && (
                <>
                  <div className={style.menuNameAndStatusDiv}>
                    <p>{item.menuName}</p>
                    <div className={style.statusDiv}>
                      <div className={style.status}></div>
                    </div>
                    <p>10/20</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        {/* menu div ends */}

        {activeOption === 0 && (
          <>
            <Persona />
          </>
        )}
        {activeOption === 1 && (
          <>
            <Persona />
          </>
        )}
        {activeOption === 2 && (
          <>
            <Persona />
          </>
        )}
        {activeOption === 3 && (
          <>
            <Persona />
          </>
        )}
        {activeOption === 4 && (
          <>
            <Persona />
          </>
        )}
        {activeOption === 5 && (
          <>
            <Persona />
          </>
        )}
        {activeOption === 6 && (
          <>
            <Persona />
          </>
        )}
        {activeOption === 7 && (
          <>
            <Persona />
          </>
        )}
      </div>
      {/* main container ends */}

      {/* the close icon */}
      <img
        onClick={() => handleNavigation("/")}
        className={style.closeIcon}
        src={close}
        alt="the close icon"
      />
      {/* the close icon ends */}
    </div>
  );
};

export default ManageBrand;
