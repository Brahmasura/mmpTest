import { Route, Routes } from "react-router-dom";
import ProjectsMain from "../ProjectsMain/ProjectsMain";

const ProjectsHome = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<ProjectsMain/>}/>
       </Routes>
    </>
  );
};

export default ProjectsHome;
