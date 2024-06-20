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

import { Route, Routes, useLocation, useNavigate, useResolvedPath } from "react-router-dom";
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

  const [activeOption, setActiveOption] = useState(index.index);

  // this function is to set active state
  const handleActive = (term) => {
    setActiveOption(term);
  };

  // this useEffect is to check that what is the value of the index that we have recieved
  // useEffect(() => {
  //   console.log("index no:", index.index);
  // }, [index]);

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

        {
          activeOption === 0 && (<><Persona/></>)
        }
        {/* <div>
          <Routes>
            <Route path="persona" element={<Persona />} />
          </Routes>
        </div> */}
       
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
