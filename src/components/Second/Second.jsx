import Title from "../Title/Title";
import style from "./second.module.scss";
import spacex from "../../assets/spacex-logo-big.png";
import smartfit from "../../assets/smart-fit-logo.png";
import fedex from "../../assets/FedEx-Logo-PNG-Transparent.png";
import frontex from "../../assets/FRONT3X-Logo.png";
import Brands from "../Brands/Brand";
import { useNavigate } from "react-router-dom";

const brandsArray = [
  {
    brandImage: spacex,
    brandName: "spacex",
    level: "55",
  },

  {
    brandImage: smartfit,
    brandName: "smartfit",
    level: "15",
  },

  {
    brandImage: fedex,
    brandName: "fedex",
    level: "55",
  },
  {
    brandImage: frontex,
    brandName: "frontex",
    level: "55",
  },

  {
    brandImage: spacex,
    brandName: "spacex",
    level: "55",
  },

  {
    brandImage: smartfit,
    brandName: "smartfit",
    level: "15",
  },
];

const Second = () => {
  const navigate = useNavigate();

  const handleNavigation = (destination, brand) => {
    navigate(destination, { state: brand });
  };
  return (
    <>
      <div className={style.mainDiv}>
        {/* title */}
        <Title text="MyBrands" handleContainerClick={() => handleNavigation("/brands")} />

        <div className={style.brandsContainer}>
          {brandsArray.map((item, index) => (
            <Brands
              onClick={() =>
                handleNavigation(`/brands/brandOption/${item.brandName}`, item)
              }
              key={index}
              brandImage={item.brandImage}
              level={item.level}
              brandName={item.brandName}
            />
          ))}

          <div className={style.newBrandParaDiv}>
            <p>NEW BRAND</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
