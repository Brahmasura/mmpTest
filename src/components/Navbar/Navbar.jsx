import style from "./navbar.module.scss";
import map from "../../assets/map2.svg";
import ashley from "../../assets/ashley.png";
import down from "../../assets/down-chevron.svg";
import search from "../../assets/search.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [profileClicked, setProfileClicked] = useState(false);
  const location = useLocation();

  const handleProfileClick = () => {
    setProfileClicked(!profileClicked);
  };

  const getNavbarTitle = () => {
    switch (true) {
      case location.pathname === "/":
        return "Overview";
      case location.pathname.startsWith("/projects"):
        return "MyProjects";
      case location.pathname.startsWith("/brands"):
        return "Manage Brands";
      default:
        return "Overview";
    }
  };
  return (
    <>
      <div className={style.navbar}>
        <p>{getNavbarTitle()}</p>

        <div className={style.navRight}>
          <img className={style.navMap} src={map} alt="the map logo" />
          <div className={style.inputBox}>
            <input type="text" placeholder="Search" name="search" />
            <img src={search} alt="search logo" />
          </div>

          {/* the ashley box */}
          <div className={style.ashleyBox} onClick={handleProfileClick}>
            <img className={style.ashley} src={ashley} alt="the ashley" />
            <p>Ashley w.</p>
            <div className={style.searchBox}>
              <img
                className={profileClicked ? style.upArrow : style.downArrow}
                src={down}
                alt="the down"
              />
            </div>
          </div>

          {profileClicked && (
            <>
              <div className={style.profileDiv}>
                <p>My Profile</p>
                <p>Settings</p>
                <p>Help</p>
                <button>
                  <p>Sign Out</p>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
