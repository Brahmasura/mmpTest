import More from "../moreButton/More";
import style from "./title.module.scss";

const Title = ({text}) => {
  return (
    <>
     <div className={style.mainDiv}>
        <p>{text}</p>
        <More backgroundColor="red" width={30} height={30}/>
     </div>
    </>
  )
}

export default Title;