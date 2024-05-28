import { useState } from "react";
import style from "./event.module.scss";

const Event = ({ date, title }) => {
  const [eventHover, setEventHover] = useState(false);

  const handleEventHover = () => {
    setEventHover(!eventHover);
  };

  return (
    <>
      <div
        className={`${style.mainDiv} ${eventHover && style.mainDiv__backRed}`}
        onMouseEnter={handleEventHover}
        onMouseLeave={handleEventHover}
      >
        <p className={style.date}>{date}</p>
        <p className={style.title}>MEMBER PARTY {eventHover && (<br/>)} MEETING - 2PM EST</p>

        {/* the RSVP div */}

        {eventHover && (
          <>
            <div className={style.rsvpDiv}>
              <p>RSVP</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Event;
