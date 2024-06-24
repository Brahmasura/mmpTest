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

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import BackAndBrandSelector from "../Components/BackAndBrandSelector/BackAndBrandSelector";
import Persona from "./MenuRoutes/Persona/Persona";
import Design from "./MenuRoutes/Design/Design";
import Tool from "./MenuRoutes/ToolPage/Tool";
import Assets from "./MenuRoutes/AssetsCompo/Assets";
import Offers from "./MenuRoutes/Offers/Offers";
import Audiences from "./MenuRoutes/Audiences/Audiences";
import Preferences from "./Preferences/Preferences";
import People from "./MenuRoutes/People/People";

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

  // console.log("the index no:", index);

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

        {/* persona */}
        {activeOption === 0 && (
          <>
            <Persona />
          </>
        )}

        {/* design */}
        {activeOption === 1 && (
          <>
            <Design />
          </>
        )}

        {/* tools */}
        {activeOption === 2 && (
          <>
            <Tool/>
          </>
        )}

        {/* assets */}
        {activeOption === 3 && (
          <>
            <Assets/>
          </>
        )}

        {/* offers */}
        {activeOption === 4 && (
          <>
            <Offers/>
          </>
        )}

        {/* audiences */}
        {activeOption === 5 && (
          <>
          <Audiences/>
          </>
        )}

        {/* preferences */}
        {activeOption === 6 && (
          <>
            <Preferences/>
          </>
        )}

        {/* people */}
        {activeOption === 7 && (
          <>
           <People/>
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
