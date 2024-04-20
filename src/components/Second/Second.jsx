import Title from "../Title/Title";
import style from "./second.module.scss";
import spacex from "../../assets/spacex-logo-big.png";
import smartfit from "../../assets/smart-fit-logo.png";
import fedex from "../../assets/FedEx-Logo-PNG-Transparent.png";
import frontex from "../../assets/FRONT3X-Logo.png";
import Brands from "../Brands/Brand";

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
  return (
    <>
      <div className={style.mainDiv}>
        {/* title */}
        <Title text="MyBrands" />

        <div className={style.brandsContainer}>
          {brandsArray.map((item, index) => (
            <Brands key={index} brand={item.brand} text={item.text} title={item.title} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Second;
