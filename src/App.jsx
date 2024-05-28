import style from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import SidebarNew from "./components/SidebarNew/SidebarNew";
import Chat from "./components/First/Chat.jsx/Chat";
import close from "./assets/closeVertical.svg";
import ProjectsHome from "./components/Third/ProjectsHome/ProjectsHome";
import { Route, Routes } from "react-router-dom";
import { EventContext } from "./Context/EventContext";
import { useContext } from "react";

function App() {
  const { clickedEvent, handleEventClick } = useContext(EventContext);

  console.log("clickedEvent", clickedEvent);

  return (
    <>
      <div className={style.mainDiv}>
        {/* for sidebar */}
        <SidebarNew />

        {/* for the main content */}
        <div className={style.contentDiv}>
          {/* navbar */}
          <Navbar />

          {/* now the main container */}
          <Routes>
            <Route index element={<Container />} />
            <Route path="chat" element={<Chat />} />
            <Route path="projects/*" element={<ProjectsHome />} />
          </Routes>

          {/* the register event div begins */}

          {clickedEvent !== null && (
            <>
              <div className={style.registerEventWrapper}>
                {/* <p>{clickedEvent.date}</p> */}

                <div className={style.registerEventDiv}>
                  <div className={style.headingDiv}>
                    <p>Register to Upcoming Event</p>
                    <img
                      src={close}
                      alt="the close icon"
                      onClick={() => handleEventClick(null)}
                    />
                  </div>

                  {/* date div begins */}
                  <div className={style.dateDiv}>
                    <p>{clickedEvent}</p>
                    <p className={style.eventDetailPara}>
                      MEMBER PARTY MEETING -2PM EST
                    </p>
                  </div>

                  {/* email input div begins
                   */}
                  <div className={style.emailInputWrapper}>
                    <label htmlFor="email" className={style.label}>
                      CONFIRM YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={style.input}
                      required
                    />

                  <button>SUBMIT</button>
                  </div>
                  {/* email input ends */}


                </div>
              </div>
            </>
          )}

          {/* the register event div ends */}
        </div>
      </div>
    </>
  );
}

export default App;
