import style from "./brand.module.scss";
import star from "../../assets/star.svg";
import { useState } from "react";

const Brands = ({ brand, text, title }) => {
  const [brandHovered, setBrandHovered] = useState(false);

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
        <img className={style.brand} src={brand} alt="brand logo" />
        <p className={style.text}>{text}</p>
        <p className={style.title}>{title}</p>

        {brandHovered && (
          <>
            <div className={style.brandHoveredDiv}>
              <button>
                <p>VIEW</p>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Brands;
