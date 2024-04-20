import style from "./navbar.module.scss";
import map from "../../assets/map2.svg"
import ashley from "../../assets/ashley.png";
import down from "../../assets/down-chevron.svg";
import search from "../../assets/search.svg";

const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <p>Overview</p>

        <div className={style.navRight}>
          <img className={style.navMap} src={map} alt="the map logo" />
          <div className={style.inputBox}>
            <input type="text" placeholder="Search" name="search" />
            <img src={search} alt="search logo" />
          </div>

          {/* the ashley box */}
          <div className={style.ashleyBox}>
            <img className={style.ashley} src={ashley} alt="the ashley" />
            <p>Ashley w.</p>
            <div className={style.searchBox}>
              <img className={style.downArrow} src={down} alt="the down" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
