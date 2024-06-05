import style from "./calendar.module.scss";
import closeIcon from "../../../assets/closeIcon.svg";
import calendarToggler from "../../../assets/Fifth/calendarTogglerIcon.svg";
import spacexLogo from "../../../assets/spacex-logo-big.png";
import ashleyPic from "../../../assets/ashley.png";
import clock from "../../../assets/Fifth/calendarClock.svg";
import downArrow from "../../../assets/Fifth/fifthDownArrow.svg";
import leftArrow from "../../../assets/Fifth/calendarLeftArrow.svg";
import rightArrow from "../../../assets/Fifth/calendarRightArrow.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// the coachingOptionsArray
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

// days Array
const daysArray = ["S", "M", "T", "W", "T", "F", "S"];

// calendar array with dummy dates and properties
const calendarArray = [
  {
    month: "JANUARY",
    shortMonth: "JAN",
    days: [
      {
        date: "31",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "1",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "2",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "3",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "4",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "5",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "6",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "7",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "8",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "9",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "10",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "11",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "12",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "13",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "14",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "15",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "16",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "17",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "18",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "19",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "20",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "21",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "22",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "23",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "24",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "25",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "26",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "27",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "28",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "29",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "30",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "31",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "1",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "2",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "3",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
    ],
  },
  {
    month: "FEBRUARY",
    shortMonth: "FEB",
    days: [
      {
        date: "28",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "29",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "30",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "31",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "1",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "2",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "3",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "4",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "5",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "6",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "7",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "8",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "9",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "10",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "11",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "12",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "13",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "14",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "15",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "16",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "17",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "18",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "19",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "20",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "21",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "22",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "23",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "24",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "25",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "26",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "27",
        dateInclusive: true,
        eventScheduled: true,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "28",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "29",
        dateInclusive: true,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "1",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
      {
        date: "2",
        dateInclusive: false,
        eventScheduled: false,
        scheduleDescription: "MEMBER PARTY MEETING - 2PM",
      },
    ],
  },

  //  will add more months if needed
];

const Calendar = () => {
  const navigate = useNavigate();
  const [togglerDefault, setTogglerDefault] = useState(true);
  const [coachingSelected, setCoachingSelected] = useState(0);
  const [coachingToggle, setCoachingToggle] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(0);
  const { month, shortMonth, days } = calendarArray[startIndex];

  // function to get six values and update on the click begins

  const getFirstSixScheduledEvents = (calendarArray, startIndex) => {
    const events = [];

    for (let i = startIndex; i < calendarArray.length; i++) {
      const month = calendarArray[i];
      for (const day of month.days) {
        if (day.eventScheduled) {
          events.push({
            shortMonth: month.shortMonth,
            date: day.date,
            scheduleDescription: day.scheduleDescription,
          });
        }
        if (events.length === 6) {
          return events;
        }
      }
    }

    return events;
  };

  const firstSixEvents = getFirstSixScheduledEvents(calendarArray, startIndex);

  // function to handeNextMonth increment
  const handleNextMonth = () => {
    // setStartIndex((prevIndex) => (prevIndex + 1) % calendarArray.length);
    setStartIndex((prevIndex) => {
      const value = prevIndex + 1;
      if (value < calendarArray.length) {
        return value;
      } else {
        return prevIndex;
      }
    });
  };

  // function to handlePreviousMonth
  const handlePreviousMonth = () => {
    // setStartIndex((prevIndex) => prevIndex - 1);
    setStartIndex((prevIndex) => {
      const value = prevIndex - 1;
      if (value < 0) {
        return prevIndex;
      } else {
        return value;
      }
    });
  };

  // function to selectEvent index
  const handleEventSelection = (index) => {
    setSelectedEvent(index);
  };

  // function ends

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

                {/* six scheduled event code begins */}
                {firstSixEvents.map((item, index) =>
                  selectedEvent === index ? (
                    <>
                      <div className={style.expandedEvent}>
                        <p className={style.datePara}>
                          {item.shortMonth} {item.date}
                        </p>

                        <p className={style.meetingPara}>
                          {item.scheduleDescription}
                        </p>

                        <p className={style.detailPara}>DETAIL</p>

                        <p className={style.desciptionPara}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>

                        <button>
                          <p>RSVP UPCOMING EVENT</p>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => handleEventSelection(index)}
                        className={style.defaultEvent}
                      >
                        <div className={style.leftDiv}>
                          <p className={style.datePara}>
                            {item.shortMonth} {item.date}
                          </p>
                          <p className={style.meetingPara}>
                            {item.scheduleDescription}
                          </p>
                        </div>

                        <p className={style.rsvpPara}>RSVP</p>
                      </div>
                    </>
                  )
                )}

                {/* six scheduled event code ends */}
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

        {/* main right Div begins */}
        <div className={style.mainRightDiv}>
          <p className={style.dateSelectionPara}>Select a Date & Time</p>

          {/* the calendar functionality begins */}
          {/* {calendarArray[startIndex].map((item, index) => ( */}
          <div className={style.calendarWrapper}>
            <div className={style.monthDiv}>
              <img
                onClick={handlePreviousMonth}
                src={leftArrow}
                alt="left Arrow"
              />
              <p className={style.monthName}>{month}</p>
              <img
                onClick={handleNextMonth}
                src={rightArrow}
                alt="right Arrow"
              />
            </div>

            {/* the real calendar begins */}
            <div className={style.calendar}>
              {/* days like sunday, monday div begins */}
              {daysArray.map((item, index) => (
                <div key={index} className={style.dayDiv}>
                  <p>{item}</p>
                </div>
              ))}

              {/* ends */}

              {/* dates begins */}

              {days.map((item, index) => (
                <div
                  key={index}
                  className={`${style.dateDiv} ${
                    item.eventScheduled ? style.scheduledDateDiv : ""
                  }`}
                >
                  <p
                    className={
                      item.eventScheduled
                        ? style.scheduledDate
                        : item.dateInclusive
                        ? style.inclusiveDate
                        : style.nonInclusiveDate
                    }
                  >
                    {item.date}
                  </p>

                  {item.eventScheduled && (
                    <>
                      <p className={style.scheduleDescPara}>
                        MEMBER PARTY <br /> MEETING - 2:PM EST
                      </p>
                    </>
                  )}
                </div>
              ))}

              {/* ends */}
            </div>

            {/* the real calendar ends */}
          </div>
          {/* ))} */}

          {/* the calendar functionality ends */}
        </div>
        {/* main right div ends */}
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
