import style from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import SidebarNew from "./components/SidebarNew/SidebarNew";
import Chat from "./components/First/Chat.jsx/Chat";
import ProjectsHome from "./components/Third/ProjectsHome/ProjectsHome";
import { Route, Routes } from "react-router-dom";

function App() {
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
        </div>
      </div>
    </>
  );
}

export default App;
