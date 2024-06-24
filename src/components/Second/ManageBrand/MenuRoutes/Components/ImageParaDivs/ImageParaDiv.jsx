import style from "./imageParaDiv.module.scss";

const ImageParaDiv = ({ image, text }) => {
  return (
    <div className={style.mainDiv}>
      <div className={style.imageDiv}>
        <img src={image} alt="the image" />
      </div>

      <div className={style.textDiv}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ImageParaDiv;
