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
    brand: spacex,
    title: "spacex",
    text: "LvL55",
  },

  {
    brand: smartfit,
    title: "smartfit",
    text: "LvL15",
  },

  {
    brand: fedex,
    title: "fedex",
    text: "LvL55",
  },
  {
    brand: frontex,
    title: "frontex",
    text: "LvL55",
  },

  {
    brand: spacex,
    title: "spacex",
    text: "LvL55",
  },

  {
    brand: smartfit,
    title: "smartfit",
    text: "LvL15",
  },
];

const Second = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/brands");
  }
  return (
    <>
      <div className={style.mainDiv}>
        {/* title */}
        <Title text="MyBrands" handleContainerClick={handleNavigation} />

        <div className={style.brandsContainer}>
          {brandsArray.map((item, index) => (
            <Brands
              key={index}
              brand={item.brand}
              text={item.text}
              title={item.title}
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
