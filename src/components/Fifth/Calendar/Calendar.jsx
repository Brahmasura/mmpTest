import style from "./calendar.module.scss";
import closeIcon from "../../../assets/closeIcon.svg";
import calendarToggler from "../../../assets/Fifth/calendarTogglerIcon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Calendar = () => {
  const navigate = useNavigate();
  const [togglerDefault, setTogglerDefault] = useState(true);

  //   for toggler handling
  const handleToggler = () => {
    setTogglerDefault(!togglerDefault);
  };

  // for navigation
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <div className={style.wrapperDiv}>
      <div className={style.mainDiv}>
        {/* main left Div */}
        <div className={style.mainLeftDiv}>
          {/* the left div content begins */}
          <p className={style.firstMainPara}>MyMarketingCalendar</p>
          <p className={style.secondMainPara}>Upcoming Community Events</p>

          {/* the left div content ends */}
          {/* toggler div */}
          <div onClick={handleToggler} className={style.togglerDiv}>
            <img src={calendarToggler} alt="the calendar toggler icon" />
            {togglerDefault ? (
              <>
                <p>Schedule Coaching</p>
              </>
            ) : (
              <>
                <p>Full Calendar</p>
              </>
            )}
          </div>
        </div>
        <div className={style.mainRightDiv}>right Div</div>
      </div>

      <img
        onClick={handleNavigation}
        className={style.closeIcon}
        src={closeIcon}
        alt="the close icon"
      />
    </div>
  );
};

export default Calendar;
