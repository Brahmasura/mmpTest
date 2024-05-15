import More from "../moreButton/More";
import style from "./title.module.scss";

const Title = ({ text }) => {
  return (
    <>
      <div className={style.mainDiv}>
        <p>{text}</p>
        <More
          backgroundColor="red"
          text="SEE ALL"
          width={2.34375}
          height={2.34375}
        />
      </div>
    </>
  );
};

export default Title;
