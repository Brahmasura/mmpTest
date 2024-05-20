// import { useEffect } from "react";
// import axios from "axios";
import { useContext } from "react";
import style from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import SidebarNew from "./components/SidebarNew/SidebarNew";
import { ContainerContext } from "./Cotntext/ContainerContext";
import Chat from "./components/First/Chat.jsx/Chat";
import ProjectsHome from "./components/Third/ProjectsHome/ProjectsHome";
import { render } from "react-dom";

function App() {
  const { containerNumber } = useContext(ContainerContext);

  const renderContainer = () => {
    switch (containerNumber) {
      case 0:
        return <Container />;
      case 1:
        return <Chat />;
      case 3:
        return <ProjectsHome />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={style.mainDiv}>
        {/* for sidebar */}
        {/* <div className={style.sidebar}> */}
        <SidebarNew />
        {/* </div> */}

        {/* for the main content */}
        <div className={style.contentDiv}>
          {/* navbar */}
          <Navbar />

          {/* now the main container */}
          {/* <div className={style.parentContainer}> */}
          {/* {containerNumber === 0 && <Container />}

          {containerNumber === 1 && <Chat />}

          {containerNumber === 3 && <ProjectsHome />} */}
           

           {renderContainer()}
          {/* so this is going to be the renderer of other pages */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
