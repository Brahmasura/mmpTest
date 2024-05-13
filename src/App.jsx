import style from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar";
import SidebarNew from "./components/SidebarNew/SidebarNew";

function App() {
  return (
    <>
      <div className={style.mainDiv}>
        {/* for sidebar */}
        <div className={style.sidebar}>
          {/* <Sidebar /> */}
          <SidebarNew />
        </div>

        {/* for the main content */}
        <div className={style.contentDiv}>
          {/* navbar */}
          <Navbar />

          {/* now the main container */}
          <Container />
        </div>
      </div>
    </>
  );
}

export default App;
