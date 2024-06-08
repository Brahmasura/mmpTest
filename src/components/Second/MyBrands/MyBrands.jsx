import style from "./myBrands.module.scss";
import close from "../../../assets/closeIcon.svg";
import fedEx from "../../../assets/FedEx-Logo-PNG-Transparent.png";
import smartFit from "../../../assets/smart-fit-logo.png";
import spaceX from "../../../assets/spacex-logo-big.png";
import frontEx from "../../../assets/FRONT3X-Logo.png";
import mmpOne from "../../../assets/mmpOne.png";
import mmpTwo from "../../../assets/mmpTwo.png";
import yellowStar from "../../../assets/yellowStar.svg";
import greyStar from "../../../assets/greyStar.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// myBrands Array begins
const MyBrandsArray = [
  {
    brandImage: spaceX,
    brandName: "SPACEX",
    percentCompleted: "75%",
  },
  {
    brandImage: smartFit,
    brandName: "SMARTFIT",
    percentCompleted: "20%",
  },
  {
    brandImage: frontEx,
    brandName: "FRONTEX",
    percentCompleted: "55%",
  },

  {
    brandImage: fedEx,
    brandName: "FEDEX",
    percentCompleted: "0%",
  },
  {
    brandImage: mmpOne,
    brandName: "MyMarketingPass",
    percentCompleted: "10%",
  },
  {
    brandImage: mmpTwo,
    brandName: "MYMARKETINGPASS",
    percentCompleted: "10%",
  },
];

// my brands array ends

const MyBrands = () => {
  const [activeBrand, setActiveBrand] = useState(0);
  const navigate = useNavigate();

  // funciton to handle navigation
  const handleNavigation = (destination, brand) => {
    navigate(destination, { state: brand });
  };

  // function to handle active brand
  const handleBrandSelect = (index) => {
    setActiveBrand(index);
  };

  return (
    // the wrapper
    <div className={style.myBrandsWrapper}>
      {/* the myBrands main container begins*/}
      <div className={style.myBrandsMainContainer}>
        {/* this below is for the navigation to the add new brand container */}
        {/* <p onClick={() => handleNavigation("newBrand")} >Hi this is my brands Page</p> */}

        {/* title div begins */}
        <div className={style.myBrandsTitle}>
          <p>MyBrands</p>
        </div>
        {/* title div ends */}

        <div className={style.mainContentDiv}>
          {/* the add new para begins  */}
          <p className={style.firstPara}>First things first</p>
          <p className={style.secondPara}>
            Let's chose your brand or{" "}
            <span onClick={() => handleNavigation("newBrand")}>
              create a new one
            </span>
          </p>
          {/* the add new para ends */}

          {/* my brands div begins */}
          <div className={style.myBrandsContainer}>
            {MyBrandsArray.map((item, index) => (
              <div
                onClick={() => {
                  handleBrandSelect(index),
                    handleNavigation(`brandOption/${item.brandName}`, item);
                }}
                key={index}
                className={style.brandDiv}
              >
                <div className={style.starImageDiv}>
                  <img
                    className={style.starImage}
                    src={activeBrand === index ? yellowStar : greyStar}
                    alt="the star"
                  />
                  <img
                    className={style.brandImage}
                    src={item.brandImage}
                    alt="the brand logo"
                  />
                </div>

                <div className={style.nameStatusDiv}>
                  <p>
                    {item.brandName}&nbsp;
                    <span>{item.percentCompleted} completed</span>
                  </p>
                </div>
              </div>
            ))}

            <div
              onClick={() => handleNavigation("newBrand")}
              className={style.createNewBrandDiv}
            >
              <p>create a new brand</p>
            </div>
          </div>

          {/* my brands div ends */}
        </div>
      </div>
      {/* the myBrands main Container ends */}

      <img
        onClick={() => handleNavigation("/")}
        className={style.closeIcon}
        src={close}
        alt="the close icon"
      />
    </div>
  );
};

export default MyBrands;
