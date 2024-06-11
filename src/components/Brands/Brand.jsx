import style from "./brand.module.scss";
import star from "../../assets/star.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Brands = ({ brandImage, brandName, level }) => {
  const [brandHovered, setBrandHovered] = useState(false);
  const navigate = useNavigate();

  // function for navigation
  const handleNavigation = (destination, brand) => {
    navigate(destination, { state: brand });
  };

  // function to handleBrandHover
  const handleBrandHover = () => {
    setBrandHovered(!brandHovered);
  };

  return (
    <>
      <div
        onMouseEnter={handleBrandHover}
        onMouseLeave={handleBrandHover}
        className={style.mainDiv}
      >
        <img className={style.star} src={star} alt="the star" />
        <img className={style.brand} src={brandImage} alt="brand logo" />
        {/* <p className={style.text}>{text}</p> */}

        <p className={style.title}>{brandName}</p>

        {brandHovered ? (
          <>
            <div
              onClick={() =>
                handleNavigation(`/brands/brandOption/${brandName}`, {
                  brandName,
                  brandImage,
                  level,
                })
              }
              className={style.brandHoveredDiv}
            >
              <p>VIEW</p>
            </div>
          </>
        ) : (
          <>
            <p className={style.text}>LvL{level}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Brands;
