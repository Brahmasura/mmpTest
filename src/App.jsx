
import style from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className={`container-fluid ${style.mainDiv}`}>
        <div className="row">
          {/* for sidebar */}
          <div className={`col-1 ${style.sidebar}`}>
            <Sidebar />
          </div>

          {/* for the main content */}
          <div className={`col-11 ${style.contentDiv}`}>
            {/* navbar */}
            <Navbar />

            {/* now the main container */}
            <Container/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
