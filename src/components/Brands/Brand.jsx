import style from "./brand.module.scss";
import star from "../../assets/star.svg";

const Brands = ({ brand, text, title }) => {
  return (
    <>
      <div className={style.mainDiv}>
        <img className={style.star} src={star} alt="the star" />
        <img className={style.brand} src={brand} alt="brand logo" />
        <p className={style.text}>{text}</p>
        <p className={style.title}>{title}</p>
      </div>
      
    </>
  );
};

export default Brands;
