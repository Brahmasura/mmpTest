import style from "./sidebar.module.scss";
import face from "../../assets/SalesGuy.svg";
import ticket from "../../assets/ticket.svg";

const Sidebar = () => {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.faceDiv}>
          <img src={face} alt="face guy" />
        </div>

        <img className={style.ticket}  src={ticket} alt="the ticket logo" />
        <img className={style.ticket}  src={ticket} alt="the ticket logo" />
        <img className={style.ticket}  src={ticket} alt="the ticket logo" />
        <img className={style.ticket}  src={ticket} alt="the ticket logo" />
        <img className={style.ticket}  src={ticket} alt="the ticket logo" />
        <img className={style.ticket}  src={ticket} alt="the ticket logo" />
        <img className={style.ticket}  src={ticket} alt="the ticket logo" />
        <img className={`${style.ticket} ${style.bottom}`}  src={ticket} alt="the ticket logo" />

      </div>
    </>
  );
};

export default Sidebar;
