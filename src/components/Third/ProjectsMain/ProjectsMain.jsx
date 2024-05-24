import style from "./projectsMain.module.scss";
import { useNavigate } from "react-router-dom";
import star from "../../../assets/Third/projectTogglerStar.svg";
import downArrow from "../../../assets/Third/projectTogglerDownArrow.svg";
import chatClose from "../../../assets/First/Chat/chatClose.svg";
import addIcon from "../../../assets/Third/addIcon.svg";
import clock from "../../../assets/Third/projectClock.svg";
import tick from "../../../assets/Third/projectReady.svg";
import edit from "../../../assets/Third/projectEdit.svg";
import projectDelete from "../../../assets/Third/projectDelete.svg";
import unselectedStar from "../../../assets/Third/projectUnselectedStar.svg";

import { useState } from "react";

// the active projects array
const ActiveProjectsArray = [
  {
    projectName: "SpaceX Website Pages",
    completed: 4,
    total: 7,
    openPasses: 2,
    totalPasses: 20,
    color: "#FF7F00",
    open_tickets: [
      {
        ticket_id: 23105,
        dept: "Automation & Cotact Management",
        percentage: 50,
      },
      {
        ticket_id: 23105,
        dept: "Website Work",
        percentage: 30,
      },
    ],
    closed_tickets: [
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Brand Logo",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Copywriting",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Ads",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "FB Professional Profile",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Linkeding Social Media Banners",
        closed: "Feb 03 2024",
      },
    ],
  },
  {
    projectName: "visual Branding",
    completed: 1,
    total: 4,
    openPasses: 1,
    totalPasses: 12,
    color: "#FFD700",
    open_tickets: [
      {
        ticket_id: 23105,
        dept: "Automation & Cotact Management",
        percentage: 50,
      },
      {
        ticket_id: 23105,
        dept: "Website Work",
        percentage: 30,
      },
    ],
    closed_tickets: [
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Brand Logo",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Copywriting",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Ads",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "FB Professional Profile",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Linkeding Social Media Banners",
        closed: "Feb 03 2024",
      },
    ],
  },
  {
    projectName: "Landing Page Frontex",
    completed: 5,
    total: 7,
    openPasses: 1,
    totalPasses: 2,
    color: "#00A6FB",
    open_tickets: [
      {
        ticket_id: 23105,
        dept: "Automation & Cotact Management",
        percentage: 50,
      },
      {
        ticket_id: 23105,
        dept: "Website Work",
        percentage: 30,
      },
    ],
    closed_tickets: [
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Brand Logo",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Copywriting",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Ads",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "FB Professional Profile",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Linkeding Social Media Banners",
        closed: "Feb 03 2024",
      },
    ],
  },
  {
    projectName: "Facebook Ads",
    completed: 4,
    total: 5,
    openPasses: 0,
    totalPasses: 1,
    color: "#32CD32",
    open_tickets: [
      {
        ticket_id: 23105,
        dept: "Automation & Cotact Management",
        percentage: 50,
      },
      {
        ticket_id: 23105,
        dept: "Website Work",
        percentage: 30,
      },
    ],
    closed_tickets: [
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Brand Logo",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Copywriting",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Ads",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "FB Professional Profile",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Linkeding Social Media Banners",
        closed: "Feb 03 2024",
      },
    ],
  },
  {
    projectName: "Paid Campaigns",
    completed: 3,
    total: 5,
    openPasses: 3,
    totalPasses: 6,
    color: "#FFFDFC",
    open_tickets: [
      {
        ticket_id: 23105,
        dept: "Automation & Cotact Management",
        percentage: 50,
      },
      {
        ticket_id: 23105,
        dept: "Website Work",
        percentage: 30,
      },
    ],
    closed_tickets: [
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Brand Logo",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Copywriting",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Ads",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "FB Professional Profile",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Linkeding Social Media Banners",
        closed: "Feb 03 2024",
      },
    ],
  },
  {
    projectName: "SpaceX Website Pages",
    completed: 4,
    total: 7,
    openPasses: 2,
    totalPasses: 20,
    color: "#FF7F00",
    open_tickets: [
      {
        ticket_id: 23105,
        dept: "Automation & Cotact Management",
        percentage: 50,
      },
      {
        ticket_id: 23105,
        dept: "Website Work",
        percentage: 30,
      },
    ],
    closed_tickets: [
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Brand Logo",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Copywriting",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Ads",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "FB Professional Profile",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Linkeding Social Media Banners",
        closed: "Feb 03 2024",
      },
    ],
  },
  {
    projectName: "visual Branding",
    completed: 1,
    total: 4,
    openPasses: 1,
    totalPasses: 12,
    color: "#FFD700",
    open_tickets: [
      {
        ticket_id: 23105,
        dept: "Automation & Cotact Management",
        percentage: 50,
      },
      {
        ticket_id: 23105,
        dept: "Website Work",
        percentage: 30,
      },
    ],
    closed_tickets: [
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Brand Logo",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Copywriting",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Ads",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "FB Professional Profile",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Linkeding Social Media Banners",
        closed: "Feb 03 2024",
      },
    ],
  },
  {
    projectName: "Landing Page Frontex",
    completed: 5,
    total: 7,
    openPasses: 1,
    totalPasses: 2,
    color: "#00A6FB",
    open_tickets: [
      {
        ticket_id: 23105,
        dept: "Automation & Cotact Management",
        percentage: 50,
      },
      {
        ticket_id: 23105,
        dept: "Website Work",
        percentage: 30,
      },
    ],
    closed_tickets: [
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Brand Logo",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Copywriting",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Ads",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "FB Professional Profile",
        closed: "Feb 03 2024",
      },
      {
        ticket_id: 23105,
        // dept: "Writing",
        type: "Linkeding Social Media Banners",
        closed: "Feb 03 2024",
      },
    ],
  },
];

// the inactive projects array
const InactiveProjectsArray = [
  {
    projectName: "SpaceX Website Pages",
    closedOn: "Feb 03 2024",
    totalPasses: 20,
  },
  {
    projectName: "visual Branding",
    closedOn: "Feb 03 2024",
    totalPasses: 12,
  },
  {
    projectName: "Landing Page Frontex",
    closedOn: "Feb 03 2024",
    totalPasses: 2,
  },
  {
    projectName: "Facebook Ads",
    closedOn: "Feb 03 2024",
    totalPasses: 1,
  },
  {
    projectName: "Paid Campaigns",
    closedOn: "Feb 03 2024",
    totalPasses: 6,
  },
  {
    projectName: "SpaceX Website Pages",
    closedOn: "Feb 03 2024",
    totalPasses: 20,
  },
  {
    projectName: "visual Branding",
    closedOn: "Feb 03 2024",
    totalPasses: 12,
  },
  {
    projectName: "Landing Page Frontex",
    closedOn: "Feb 03 2024",
    totalPasses: 2,
  },
];

// project brand array begins

const ProjectBrandsArray = [
  {
    brand: "SpaceX",
  },
  {
    brand: "SmartFit",
  },
  {
    brand: "A Roof For You",
  },
];

const addProgress = (projects) => {
  return projects.map((project) => {
    const { openPasses, totalPasses } = project;
    const progress =
      totalPasses !== 0 ? ((openPasses / totalPasses) * 100).toFixed(2) : "0";
    return {
      ...project,
      progress: `${progress}%`,
    };
  });
};

const updatedActiveProjectsArray = addProgress(ActiveProjectsArray);

// console.log(updatedActiveProjectsArray);

const ProjectsMain = () => {
  const navigate = useNavigate();
  const [activeProjectHover, setActiveProjectHover] = useState(null);
  const [projectBrandToggle, setProjectBrandToggle] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [activeDescriptionOpen, setActiveDescriptionOpen] = useState({});
  const [activeProjectClick, setActiveProjectClick] = useState(false);

  // active description open function
  const handleActiveDescription = (index) => {
    setActiveProjectClick(!activeProjectClick);
    setActiveDescriptionOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // function to handle the brand selection from the toggler
  const handleBrandselect = (index) => {
    setSelectedBrand(index);
  };

  const handleActiveProjectHover = (index) => {
    setActiveProjectHover(index);
  };

  const handleProjectBrandToggle = () => {
    setProjectBrandToggle(!projectBrandToggle);
  };

  // to handle navigation
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <>
      <div className={style.projectsMainContainer}>
        <div
          onClick={handleProjectBrandToggle}
          className={style.brandsTogglerContainer}
        >
          <div className={style.brandsToggler}>
            <img
              className={style.star}
              src={star}
              alt="the active brand start"
            />
            <p>{ProjectBrandsArray[selectedBrand].brand}</p>
            <img
              className={projectBrandToggle ? style.upArrow : style.downArrow}
              src={downArrow}
              alt="the down arrow"
            />
          </div>

          {/* the toggler div begins  */}
          {projectBrandToggle && (
            <div className={style.brandsToggleDiv}>
              {ProjectBrandsArray.map((brand, index) => (
                <div
                  onClick={() => handleBrandselect(index)}
                  key={index}
                  className={` ${style.starBrandDiv} ${
                    selectedBrand === index ? style.starBrandDivSelected : " "
                  }`}
                >
                  <img
                    src={selectedBrand === index ? star : unselectedStar}
                    alt="the star"
                  />
                  <p>{brand.brand}</p>
                </div>
              ))}

              <button>+ Create a Brand</button>
            </div>
          )}

          {/* the toggler div ends */}
        </div>

        <div className={style.projectCoveringForClose}>
          <div className={style.projectsContainer}>
            <div className={style.activeProjectsContainer}>
              {/* active projects title begins */}
              <div className={style.activeProjectsTitle}>
                <div className={style.activeTitleLeftDiv}>
                  <p>
                    Active Projects <span>10</span>
                  </p>
                </div>

                <div className={style.activeTitleRightDiv}>
                  <img src={addIcon} alt="add Icon" />
                  <p>ADD NEW</p>
                </div>
              </div>
              {/* active projects title ends */}

              {/* the active project div container begins */}
              <div
                className={`${style.activeProjectDivContainer} ${
                  activeProjectClick && style.activeProjectDivContainerOpen
                }`}
              >
                {updatedActiveProjectsArray.map((project, index) => (
                  <div
                    key={index}
                    className={style.activeProjectDiv}
                    onMouseEnter={() => handleActiveProjectHover(index)}
                    onMouseLeave={() => handleActiveProjectHover(null)}
                  >
                    <div
                      // key={index}
                      className={style.activeProjectIntro}
                    >
                      <p
                        className={style.projectName}
                        style={{ color: project.color }}
                      >
                        {project.projectName}
                      </p>

                      <div className={style.activeProjectIntroRight}>
                        {/* <p className={style.completedTotal}>
                        {project.completed}/{project.total}
                      </p> */}

                        <div className={style.openPassesDiv}>
                          <img src={clock} alt="clock icon" />
                          <p>Open Passess: {project.openPasses}</p>
                        </div>

                        <div className={style.totalPassesDiv}>
                          <img src={tick} alt="ready icon" />
                          <p>Total Passes: {project.totalPasses}</p>
                        </div>

                        {/* the progress div */}
                        <div className={style.progressDiv}>
                          <div
                            className={style.progress}
                            style={{ width: project.progress }}
                          ></div>
                        </div>

                        {/* the ticket edit icon div begins */}

                        <div className={style.ticketEditDiv}>
                          {/* the add ticket div  */}
                          <div className={style.newTicketDiv}>
                            <img src={addIcon} alt="add Icon" />
                            <p>NEW TICKET</p>
                          </div>

                          {/* the edit delete and down arrow div */}
                          <div className={style.editIconsDiv}>
                            <img
                              src={edit}
                              alt="edit icon"
                              className={
                                activeProjectHover === index
                                  ? style.hoveredEdit
                                  : ""
                              }
                            />
                            <img src={projectDelete} alt="delete icon" />
                            <img
                              onClick={() => handleActiveDescription(index)}
                              className={
                                activeDescriptionOpen[index]
                                  ? style.activeProjectUpArrow
                                  : style.activeProjectDownArrow
                              }
                              src={downArrow}
                              alt="edit icon"
                            />
                          </div>
                        </div>
                        {/* the ticket edit icon div ends */}
                      </div>
                    </div>

                    {/* the active projecct description begins */}

                    <div
                      className={
                        activeDescriptionOpen[index]
                          ? style.activeProjectDescriptionOpen
                          : style.activeProjectDescriptionClosed
                      }
                    >
                      <div className={style.activeDescriptionDiv}>
                        <div className={style.descriptionLeft}>
                          <p className={style.passesProgressTitle}>
                            Passes In Progress
                          </p>
                          {project.open_tickets.map((ticket, ticketIndex) => (
                            <div
                              key={ticketIndex}
                              className={style.progressPassesDiv}
                            >
                              <p className={style.openTicket}>
                                #{ticket.ticket_id} | {ticket.dept}
                              </p>
                              <div className={style.outerDiv}>
                                <div
                                  style={{
                                    width: `${ticket.percentage}%`,
                                  }} className={style.innerProgressDiv}
                                ></div>
                              </div>
                            </div>
                          ))}

                          <p className={style.passesClosedTitle}>
                            Closed Passes
                          </p>

                          {project.closed_tickets.map((ticket, ticketIndex) => (
                            <div key={ticketIndex} className={style.closedPassesDiv}>
                              <p className={style.closedTicket}>#{ticket.ticket_id} | {ticket.type}</p>
                              <div className={style.dateDiv}>
                                <img src={clock} alt="the time"/>
                                <p className={style.date}>{ticket.closed}</p>
                              </div>

                            </div>
                          ))}


                        </div>
                        <div className={style.descriptionRight}>
                          <h1>this is the right div </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* the active project div container ends */}
            </div>

            {/* inactive projects container begins */}
            <div className={style.inactiveProjectsContainer}>
              <div className={style.inactiveProjectsTitle}>
                <div className={style.inactiveTitleLeftDiv}>
                  <p>
                    Inactive Projects <span>10</span>
                  </p>
                </div>
              </div>

              <div className={style.inactiveProjectDivContainer}>
                {InactiveProjectsArray.map((project, index) => (
                  <div key={index} className={style.inactiveProjectDiv}>
                    <p className={style.projectName}>{project.projectName}</p>

                    <div className={style.inactiveProjectDivRight}>
                      <div className={style.closedOnDiv}>
                        <img src={clock} alt="clock icon" />
                        <p>Closed On: {project.closedOn}</p>
                      </div>

                      <div className={style.totalPassesDiv}>
                        <img src={tick} alt="ready icon" />
                        <p>Total Passes: {project.totalPasses}</p>
                      </div>

                      <div className={style.ticketEditDiv}>
                        {/* the add ticket div  */}
                        <div className={style.newTicketDiv}>
                          <img src={addIcon} alt="add Icon" />
                          <p>NEW TICKET</p>
                        </div>

                        {/* the edit delete and down arrow div */}
                        <div className={style.editIconsDiv}>
                          <img
                            src={edit}
                            alt="edit icon"
                            className={
                              activeProjectHover === index
                                ? style.hoveredEdit
                                : ""
                            }
                          />
                          <img src={projectDelete} alt="delete icon" />
                          <img src={downArrow} alt="edit icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* inactive projects container ends */}

            {/* the close button */}
            <img
              onClick={handleNavigation}
              className={style.chatClose}
              src={chatClose}
              alt="close logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsMain;
