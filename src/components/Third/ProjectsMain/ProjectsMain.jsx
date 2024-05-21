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

// the active projects array
const ActiveProjectsArray = [
  {
    projectName: "SpaceX Website Pages",
    completed: 4,
    total: 7,
    openPasses: 2,
    totalPasses: 20,
    color: "#FF7F00",
  },
  {
    projectName: "visual Branding",
    completed: 1,
    total: 4,
    openPasses: 1,
    totalPasses: 12,
    color: "#FFD700",
  },
  {
    projectName: "Landing Page Frontex",
    completed: 5,
    total: 7,
    openPasses: 1,
    totalPasses: 2,
    color: "#00A6FB",
  },
  {
    projectName: "Facebook Ads",
    completed: 4,
    total: 5,
    openPasses: 0,
    totalPasses: 1,
    color: "#32CD32",
  },
  {
    projectName: "Paid Campaigns",
    completed: 3,
    total: 5,
    openPasses: 3,
    totalPasses: 6,
    color: "#FFFDFC",
  },
  {
    projectName: "SpaceX Website Pages",
    completed: 4,
    total: 7,
    openPasses: 2,
    totalPasses: 20,
    color: "#FF7F00",
  },
  {
    projectName: "visual Branding",
    completed: 1,
    total: 4,
    openPasses: 1,
    totalPasses: 12,
    color: "#FFD700",
  },
  {
    projectName: "Landing Page Frontex",
    completed: 5,
    total: 7,
    openPasses: 1,
    totalPasses: 2,
    color: "#00A6FB",
  },
];

const addProgress = (projects) => {
  return projects.map((project) => {
    const { completed, total } = project;
    const progress = total !== 0 ? ((completed / total) * 100).toFixed(2) : "0";
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

  // to handle navigation
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <>
      <div className={style.projectsMainContainer}>
        <div className={style.brandsTogglerContainer}>
          <div className={style.brandsToggler}>
            <img
              className={style.star}
              src={star}
              alt="the active brand start"
            />
            <p>SpaceX</p>
            <img
              className={style.downArrow}
              src={downArrow}
              alt="the down arrow"
            />
          </div>
        </div>

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
            <div className={style.activeProjectDivContainer}>
              {updatedActiveProjectsArray.map((project, index) => (
                <div key={index} className={style.activeProjectDiv}>
                  <p
                    className={style.projectName}
                    style={{ color: project.color }}
                  >
                    {project.projectName}
                  </p>

                  <div className={style.activeProjectDivRight}>
                    <p className={style.completedTotal}>
                      {project.completed}/{project.total}
                    </p>

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

                    {/* the add ticket div  */}
                    <div className={style.newTicketDiv}>
                      <img src={addIcon} alt="add Icon" />
                      <p>NEW TICKET</p>
                    </div>

                    {/* the edit delete and down arrow div */}
                    <div className={style.editIconsDiv}>
                      <img src={edit} alt="edit icon" />
                      <img src={projectDelete} alt="delete icon" />
                      <img src={downArrow} alt="edit icon" />
                    </div>


                  </div>
                </div>
              ))}
            </div>

            {/* the active project div container ends */}
          </div>

          {/* the close button */}
          <img
            onClick={handleNavigation}
            className={style.chatClose}
            src={chatClose}
            alt="close logo"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsMain;
