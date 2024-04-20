import style from "./event.module.scss";

const Event = ({date, title}) => {
  return (
    <>
        <div className={style.mainDiv}>
            <p className={style.date}>{date}</p>
            <p className={style.title}>MEMBER PARTY MEETING - 2PM EST</p>
        </div>
    </>
  )
}

export default Event;