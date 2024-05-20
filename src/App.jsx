// import { useEffect } from "react";
// import axios from "axios";
import { useContext } from "react";
import style from "./App.module.scss";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import SidebarNew from "./components/SidebarNew/SidebarNew";
import { ContainerContext } from "./Cotntext/ContainerContext";
import Chat from "./components/First/Chat.jsx/Chat";

function App() {
  const { containerNumber } = useContext(ContainerContext);
  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://api-dev.mmp.updatechange.com/brands/brand_summary?access_token=1234567890ABCDEF&brand=47001465225");
  //         console.log("the response:", response.data);

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
            {containerNumber === 0 && <Container />}

            {containerNumber === 1 && <Chat/>}

            {/* so this is going to be the renderer of other pages */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
