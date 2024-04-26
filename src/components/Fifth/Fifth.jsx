import style from "./fifth.module.scss";
import Event from "../UpcomingEvent/Event";
import arrow from "../../assets/down-chevron.svg";
import calendar from "../../assets/calendar.svg";

const eventArray = [
  {
    date: "JAN 25",
  },

  {
    date: "JAN 27",
  },
  {
    date: "JAN 28",
  },
  {
    date: "JAN 30",
  },

  {
    date: "JAN 25",
  },

  {
    date: "JAN 27",
  },
  {
    date: "JAN 28",
  },
  {
    date: "JAN 30",
  },
  {
    date: "JAN 25",
  },

  {
    date: "JAN 27",
  },
  {
    date: "JAN 28",
  },
  {
    date: "JAN 30",
  },

  {
    date: "JAN 25",
  },

  {
    date: "JAN 27",
  },
  {
    date: "JAN 28",
  },
  {
    date: "JAN 30",
  },
];

const Fifth = () => {
  return (
    <>
      <div className={style.mainDiv}>
        <p className={style.title}>SCHEDULE COACHING</p>
        <div className={style.secondDiv}>
          <p className={style.paraOne}>Upcoming Events</p>
          <p className={style.paraTwo}>RSVP for community events</p>

          <div className={style.eventsContainer}>
            {eventArray.map((item, index) => (
              <Event key={index} date={item.date} />
            ))}
          </div>

          {/* the arrow box */}

          <div className={style.arrowBox}>
            <img className={style.leftArrow} src={arrow} alt="the left"/>
            <img className={style.rightArrow} src={arrow} alt="the left"/>
          </div>


          {/* calendar Div  */}
           <div className={style.calendarDiv}>
            <img src={calendar} alt="the calendar"/>
            <p>CALENDAR VIEW </p>
           </div>
    
        </div>
      </div>
    </>
  );
};

export default Fifth;
