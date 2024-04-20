import style from "./project.module.scss";

const Project = ({ title, text, fraction, color }) => {
  const titleColor = {
    color: color,
  };
  return (
    <>
      <div className={style.mainDiv}>
        <p className={style.title} style={titleColor}>
          {title}
        </p>

        <p className={style.text}>{text}</p>
        <p className={style.fraction}>{fraction}</p>
      </div>
    </>
  );
};

export default Project;
