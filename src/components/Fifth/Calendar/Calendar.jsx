import style from "./calendar.module.scss";
import closeIcon from "../../../assets/closeIcon.svg";
import calendarToggler from "../../../assets/Fifth/calendarTogglerIcon.svg";
import spacexLogo from "../../../assets/spacex-logo-big.png";
import ashleyPic from "../../../assets/ashley.png";
import clock from "../../../assets/Fifth/calendarClock.svg";
import downArrow from "../../../assets/Fifth/fifthDownArrow.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const coachingOptionsArray = [
  { coaching: "Select..." },
  { coaching: "Offers" },
  { coaching: "Target Audience" },
  { coaching: "Content Strategy" },
  { coaching: "Website Design" },
  { coaching: "Social Media" },
  { coaching: "Blogs" },
  { coaching: "Technology Recommendations" },
  { coaching: "Charity Call" },
  { coaching: "I Have A Question" },
  { coaching: "Executive Deep Dive" },
  { coaching: "Other" },
];

const Calendar = () => {
  const navigate = useNavigate();
  const [togglerDefault, setTogglerDefault] = useState(true);
  const [coachingSelected, setCoachingSelected] = useState(0);
  const [coachingToggle, setCoachingToggle] = useState(false);

  //  function to select the coaching from the option
  const handleCoachingSelect = (index) => {
    setCoachingSelected(index);
    setCoachingToggle(!coachingToggle);
  };

  // function to toggle the coaching toggle
  const handleCoachingToggle = () => {
    setCoachingToggle(!coachingToggle);
  };

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

                {/* space for the coaching shcedule div begins */}

                <div className={style.selectionMainDiv}>
                  {/* assistance div begins */}
                  <div
                    onClick={handleCoachingToggle}
                    className={style.coachingSelectionDiv}
                  >
                    <p className={style.selectedCoachingPara}>
                      {coachingOptionsArray[coachingSelected].coaching}
                    </p>
                    <img
                      className={
                        coachingToggle ? style.upArrow : style.downArrow
                      }
                      src={downArrow}
                      alt="the arrow"
                    />
                  </div>

                  {/* <button
                    onClick={handleMainDivClick}
                    style={{ visibility: coachingSelected !== 0 && "visible" }}
                  >
                    CONTINUE
                  </button> */}

                  {/* the coaching option div is below */}
                  {coachingToggle && (
                    <div className={style.coachingOptionsDiv}>
                      {coachingOptionsArray.map((item, index) => (
                        <p
                          onClick={() => handleCoachingSelect(index)}
                          key={index}
                          style={{
                            fontWeight: coachingSelected === index && "700",
                          }}
                        >
                          {item.coaching}
                        </p>
                      ))}
                    </div>
                  )}
                  {/* asisstance div ends */}
                </div>
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

                <p className={style.detailPara}>DETAILS</p>
                <p className={style.descriptionPara}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus culpa reprehenderit exercitationem ipsum sit
                  repellat natus consequatur sapiente rem, nihil ratione amet
                  blanditiis. Provident laudantium nobis dignissimos,
                  reprehenderit aspernatur impedit.
                </p>
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
