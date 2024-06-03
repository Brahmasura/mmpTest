import style from "./calendar.module.scss";
import closeIcon from "../../../assets/closeIcon.svg";
import calendarToggler from "../../../assets/Fifth/calendarTogglerIcon.svg";
import spacexLogo from "../../../assets/spacex-logo-big.png";
import ashleyPic from "../../../assets/ashley.png";
import clock from "../../../assets/Fifth/calendarClock.svg";
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
        <div
          className={`${style.mainLeftDiv} ${
            !togglerDefault && style.maindLeftDivToggled
          }`}
        >
          {/* the left div content begins but this has to be based on the togglable state */}

          {togglerDefault ? (
            <>
              {/* this is the default content to be displayed */}
              <div className={style.leftDefaultContent}>
                <p className={style.firstMainPara}>MyMarketingCalendar</p>
                <p className={style.secondMainPara}>
                  Upcoming Community Events
                </p>
              </div>
            </>
          ) : (
            <>
              {/* this is the toggled content to be displayed */}
              <div className={style.leftToggledContent}>
                <img
                  className={style.brandLogo}
                  src={spacexLogo}
                  alt="the brand logo"
                />

                <div className={style.profileIntroDiv}>
                  <img src={ashleyPic} alt="the profile pic" />
                  <p>Ashley W.</p>
                </div>

                <p className={style.memberPara}>EXECUTIVE MEMBERS</p>
                <p className={style.sessionPara}>
                  SCHEDULE YOUR COAChING SESSION
                </p>

                {/* space fro the coaching shcedule div begins */}

                {/* space for the coaching schedule div ends */}


              {/* time div begins */}
                <div className={style.timeDiv}>
                  <img src={clock} alt="the calendar clock" />
                  <div className={style.rightParaDiv}>
                    <p className={style.topPara}>30 min</p>
                    <p className={style.bottomPara}>
                      Web conferencing details provided upon confirmation
                    </p>
                  </div>
                </div>
                {/* time div ends */}
              </div>
            </>
          )}

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
