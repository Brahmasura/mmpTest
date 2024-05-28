import style from "./fifth.module.scss";
import Event from "../UpcomingEvent/Event";
import arrow from "../../assets/down-chevron.svg";
import calendar from "../../assets/calendar.svg";
import downArrow from "../../assets/Fifth/fifthDownArrow.svg";
import { useState } from "react";

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
];

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

const Fifth = () => {
  // local states begins
  const [mainDivClicked, setMainDivClicked] = useState(false);
  const [titleHover, setTitleHover] = useState(false);
  const [coachingSelected, setCoachingSelected] = useState(0);
  const [coachingToggle, setCoachingToggle] = useState(false);

  // local states ends

  // funtion for background red color on title hover
  const handleTitleHover = () => {
    setTitleHover(!titleHover);
  };

  const handleMainDivClick = () => {
    setMainDivClicked(!mainDivClicked);
    setTitleHover(false);
  };

  //  funciton to select the coaching from the option
  const handleCoachingSelect = (index) => {
    setCoachingSelected(index);
    setCoachingToggle(!coachingToggle);
  };

  // function to toggle the coaching toggle
  const handleCoachingToggle = () => {
    setCoachingToggle(!coachingToggle);
  };

  return (
    <>
      <div className={`${style.mainDiv} ${titleHover && style.mainDiv__backRed}`}>
        {mainDivClicked ? (
          <>
            {/* selection Div begins */}
            <div className={style.selectionDiv}>
              <p className={style.clickedTitle}>
                SCHEDULE YOUR <br /> COACHING SESSION
              </p>
              <p className={style.description}>
                SELECT WHAT YOU NEED ASSISTANCE FOR
              </p>

              {/* assistance div begins */}
              <div
                onClick={handleCoachingToggle}
                className={style.coachingSelectionDiv}
              >
                <p className={style.selectedCoachingPara}>
                  {coachingOptionsArray[coachingSelected].coaching}
                </p>
                <img
                  className={coachingToggle ? style.upArrow : style.downArrow}
                  src={downArrow}
                  alt="the arrow"
                />
              </div>

              <button
                style={{ visibility: coachingSelected !== 0 && "visible" }}
              >
                CONTINUE
              </button>

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

            {/* selection Div ends */}
          </>
        ) : (
          <>
            <p
              onClick={handleMainDivClick}
              onMouseEnter={handleTitleHover}
              onMouseLeave={handleTitleHover}
              className={style.title}
            >
              SCHEDULE 1-ON-1 COACHING
            </p>
          </>
        )}

        {/* second div begins */}
        <div
          className={`${style.secondDiv} ${
            mainDivClicked && style.secondDivOff
          }`}
        >
          <p className={style.paraOne}>MyMarketingCalendar</p>
          <p className={style.paraTwo}>Upcoming community events</p>

          <div
            className={
              mainDivClicked
                ? style.eventsContainerHidden
                : style.eventsContainer
            }
          >
            {eventArray.map((item, index) => (
              <Event key={index} date={item.date} />
            ))}
          </div>

          {/* the arrow box */}

          <div
            className={mainDivClicked ? style.arrowBoxHidden : style.arrowBox}
          >
            <img className={style.leftArrow} src={arrow} alt="the left" />
            <img className={style.rightArrow} src={arrow} alt="the left" />
          </div>

          {/* calendar Div  */}
          <div className={style.calendarDiv}>
            <img src={calendar} alt="the calendar" />
            <p>CALENDAR VIEW </p>
          </div>
        </div>
        {/* second div ends */}
      </div>
    </>
  );
};

export default Fifth;
